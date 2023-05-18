    Option Explicit
    Dim WSHShell, n, MyBox, p, t, mustboot, errnum, vers
    Dim enab, disab, jobfunc, itemtype
    Set WSHShell = WScript.CreateObject("WScript.Shell")
    p = "HKCU\Software\Microsoft\Windows\CurrentVersion\Policies\System\"
    p = p & "DisableRegistryTools"
    itemtype = "REG_DWORD"
    mustboot = "Log off and back on, or restart your pc to" & vbCR & "effect the changes"
    enab = "ENABLED"
    disab = "DISABLED"
    jobfunc = "Registry Editing Tools are now "
    t = "Confirmation"
    Err.Clear
    On Error Resume Next
    n = WSHShell.RegRead (p)
    On Error Goto 0
    errnum = Err.Number
    if errnum <> 0 then
     WSHShell.RegWrite p, 0, itemtype
    End If
    If n = 0 Then
     n = 1
    WSHShell.RegWrite p, n, itemtype
    Mybox = MsgBox(jobfunc & disab & vbCR & mustboot, 4096, t)
    ElseIf n = 1 then
     n = 0
    WSHShell.RegWrite p, n, itemtype
    Mybox = MsgBox(jobfunc & enab & vbCR & mustboot, 4096, t)
    End If