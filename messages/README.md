#Messages#

The project works as it is supposed to. 
It took me around 4 hours to complete this lab.

The XMLHTTPRequest worked on localhost because the JSON file was in the same folder as the javascript file and index.html, hosted on the local server. However, when the files were not hosted on a server, when the html file was opened locally in a browser, it didn't work because the file wasn't recognized as being from the same origin.

Similarly, the given URI was different from the local host, and so the JSON file could not be loaded because the same origin policy would be violated. 