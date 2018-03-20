**LAMP ON**
----
  
* **URL**

  http://helios.proto.utwente.nl:PORT/lampOn

* **Method:**
 
  `GET`
  
*  **URL Params**
 

   **Required:**

   `secret=[string]`
   <_Key provided by the HYTTIOAO committee to be able to control the lights_> 
 
   `lamp=[integer]`
   <_Identifier of the lamp to turn on; The identifier equeals the used 433Mhz kaku channel_> 


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "OK" }`
 
* **Error Response:**

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ "NO. :(" }`


* **Sample Call:**

   <_http://helios.proto.utwente.nl:1234/lampOn?secret=banaan?lamp=1 _> 
   

**LAMP OFF**
----
* **URL**

  http://helios.proto.utwente.nl:PORT/lampOff

* **Method:**
 
  `GET`
  
*  **URL Params**
 

   **Required:**

   `secret=[string]`
   <_Key provided by the HYTTIOAO committee to be able to control the lights_> 
 
   `lamp=[integer]`
   <_Identifier of the lamp to turn off; The identifier equeals the used 433Mhz kaku channel_> 


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "OK" }`
 
* **Error Response:**

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ "NO. :(" }`


* **Sample Call:**

   <_http://helios.proto.utwente.nl:1234/lampOff?secret=banaan?lamp=1 _> 
   
**COFFEE INFO**
----

* **URL**

  http://helios.proto.utwente.nl:PORT/coffee

* **Method:**
 
  `GET`
  
*  **URL Params**
 

   **Required:**

   `none`



* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ coffeeleft: integer, latestBrew: date }`
 
* **Error Response:**

  * **Code:** 200  <br />
    **Content:** `{ "TRACKER NOT CONNECTED"}`


* **Sample Call:**

   <_http://helios.proto.utwente.nl:1234/coffee _> 
