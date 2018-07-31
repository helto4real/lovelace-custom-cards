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
                $copy = $True
                (Get-Content $_.FullName) | 
                    ForEach-Object {
                        if ($_.Trim().StartsWith('// ** START FOR TEST') -eq $True) {$copy = $False} #Used to remove test code
                        if ($copy -eq $True) {
                            $_.replace('@polymer/lit-element', 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module').
                            replace('import "canvas-gauges";', 'import "./gauge.min.js";').
                            replace("if (typeof process != typeof undefined && process.env.NODE_ENV == 'production') {return;}", '').
                            replace('this.__initTests();', '')
                        }
                        if ($_.Trim().StartsWith('// ** END FOR TEST') -eq $True) {$copy = $True} #Used to remove test code
                    } | Set-Content $destfile -Force
            }
    }
Copy-Item "dist\\custom-cards.js" "Z:\\www\\custom_cards" -Force
