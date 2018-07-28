# This powershell script makes a postbuild step to 
# make components available as stand-alone compoenets
# using unpkg.com as source instead of local libraries

# Setup the search and replace 

# First copy all recursivly to the dist folder for singel card usage 
Get-ChildItem "src" -directory | 
    ForEach-Object {
        $dir = $_
        $destdir = "dist\$($dir)"
        # Delete destination directories and recreate them
        If((Test-Path $destdir) -eq $True) {Remove-Item -Recurse -Force $destdir}
        New-Item -ItemType Directory -Force -Path $destdir

        Get-ChildItem $_.FullName -Exclude @("*.html", "test","$($_.Name).js") |
            ForEach-Object {
                $destfile = "$($destdir)\$($_.FullName.Substring($_.FullName.length - $_.Name.length))"
                Copy-Item -Recurse $_.FullName $destfile 
            }
        Get-ChildItem $_.FullName -Filter "$($_.Name).js" | 
            ForEach-Object {
                $destfile = "$($destdir)\$($_.FullName.Substring($_.FullName.length - $_.Name.length))"
                (Get-Content $_.FullName) | 
                    ForEach-Object {
                        $_.replace('@polymer/lit-element', 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module').
                        replace('import "canvas-gauges";', 'import "./gauge.min.js";')
                    } | Set-Content $destfile -Force
            }
    }

# The copy the card to my hass config
Copy-Item 'dist\\custom-cards.js' 'Z:\\www\\custom_cards'
