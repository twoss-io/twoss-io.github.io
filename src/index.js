import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css'
import 'animate.css/animate.css'
import 'jquery/dist/jquery.min.js'

// detect IE
// var IEversion = detectIE();
// if (IEversion) {

//   alert('此網站暫不支援' + IEversion);
//   var root = document.getElementById('root')
//   var node = document.createElement('P')
//   node.appendChild(document.createTextNode("建議使用最新版Google Chrome/Firefox瀏覽器"))
//   node.className += 'ieclass'
//   root.appendChild(node)

//   var node2 = document.createElement('P')
//   node2.appendChild(document.createTextNode("聯絡資訊：contact@twoss.io"))
//   node2.style.textAlign = 'center'
//   root.appendChild(node2)

// } else {
    sessionStorage.setItem('page', 'home')
    render(<Root />, document.getElementById('root'));
    registerServiceWorker();
// };


/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {

  var ua = window.navigator.userAgent;
  // test values
  // IE 10
  //ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
  // IE 11
  //ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  // IE 12 / Spartan
  //ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

  var msie = ua.indexOf('MSIE ');

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');

  if (trident > 0) {

    var rv = ua.indexOf('rv:');

    // IE 11 => return version number
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');

  if (edge > 0) {
    // IE 12 => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}

