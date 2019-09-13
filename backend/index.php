<?php
/*
 * jQuery File Upload Plugin PHP Example
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

error_reporting(E_ALL | E_STRICT);
require('UploadHandler.php');
$upload_handler = new UploadHandler([
    // MUST MATCH the 'Allow-Control-Allow-Headers' header from client request
    // even if actual control is not used
    'access_control_allow_headers' => ['x-requested-with'],
    'image_versions' => []
    /* Additional configuration options */
]);

/* Additional customization can be done by extending UploadHandler class and 
overriding its methods */