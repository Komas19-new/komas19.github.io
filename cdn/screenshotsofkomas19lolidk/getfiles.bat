@echo off
copy C:\Users\RobloxStudio\Desktop\screenshots C:\USBWEBSERVER\root\cdn\screenshotsofkomas19lolidk
setlocal enableextensions
set count=0
for %%x in (*) do set /a count+=1
echo %count% files copied successfully
set count2=0
for %%x in (C:\Users\RobloxStudio\Desktop\screenshots) do set /a count2+=1
echo %count% files in the original folder.
endlocal
pause