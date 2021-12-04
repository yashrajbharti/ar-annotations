# Mind-AR Image Detection
## Ar annotations created using mind-ar library
* This repo allows you to annotate on desired hardware devices, provided we have a picture of our target image, to convert it to a .mind file. 
* With multi-tracks we can even setup multiple image targets to be recognised and annotated simultaneously. 
* Geometry component of aframe and PureBasic AR fonts (JSON format) are used to make the annotations. 
* 3D models (preferable .glTF) can also be loaded if necessary, but kills the loading time.
* This website used an Audio Player for detection of ports and switches.
  
## Jump In
  
<img src="qr-code.png" height="280px"/>
Scan the above QR code and follow the process to experience the live demo.

* Place the camera either in front of the actual object (hardware device) or the following image to view the annotations.

<img src="hardware_back.jpg" width="1080px" height="auto"/>

* Try changing the device's (AR supported phones) orientation or just placing a part of the object in front of the camera feed. All times the annotations will be placed correctly.
  
## Wrapping up
  
The above setup works for the Audio Player I chose. The same code with a few adjuestments in entity's postion will allow it to work on any object (hardware device). Only changes to be made for accomplishing this are changing the target image and creating it's respective targets.mind file. Lastly, the smoothness value is set to high, it may cause a *lazy effect* on detection but this actually is helpful to prevent flickering of the annotations.


