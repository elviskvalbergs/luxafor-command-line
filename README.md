# luxafor-command-line
Node JS script for controlling your luxafor via command-line and other applications

This script is a part of a web service that as one of the results triggers a luxafor device to light up in one of the preset levels (bad, medium, good) and optionally flashing to get attantion. This was made for flex.bi dashboard to be able to transfer a gauge state into the physical world. Use and adjust as needed

Example of calling this to set a level would be like this:

node lux.js bad

or to flash and then set a level after that

node lux.js police good
