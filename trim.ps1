$src = "c:\Users\tanmo\OneDrive\Desktop\Guidance\frontend\src\pages\Explore.jsx"
$tmp = "c:\Users\tanmo\OneDrive\Desktop\Guidance\frontend\src\pages\Explore_tmp.jsx"
$lines = Get-Content $src
$lines[0..856] | Out-File -Encoding utf8 $tmp
Move-Item -Force $tmp $src
Write-Host "Done."
