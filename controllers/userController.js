import nodemailer from 'nodemailer';
import axios from 'axios';
import { Vonage } from '@vonage/server-sdk';


// sms api setup for vonage
const vonage = new Vonage({
  apiKey: "63dc841d",
  apiSecret: "ypg2iDldr8CNC38r"
})

async function sendSMS(to, from, text) {
    await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
}




//get all users
export const getAllUsers =(req, res) =>{
    res.send('hellow')
}
//create all users
export const CreatelUsers =(req, res) =>{
    res.status(200).json(req.body);
}
//registerUser
export const registerUser = async (req, res) =>{

    // create email transpote
    const transpote = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.AUTH_PASSWORD,
        }
        
    });

   await transpote.sendMail({
        from:`Subcribe club for ${process.env.EMAIL_ADDRESS}`, 
        to:`${req.body.email}`,  
        subject:"Welcome To The App",  
        html: `
            <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <meta charset="UTF-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta content="telephone=no" name="format-detection" />
        <title></title>
        <!--[if (mso 16)]>
            <style type="text/css">
                a {
                    text-decoration: none;
                }
            </style>
        <![endif]-->
        <!--[if gte mso 9]>
            <style>
                sup {
                    font-size: 100% !important;
                }
            </style>
        <![endif]-->
        <!--[if gte mso 9]>
            <xml>
                <o:OfficeDocumentSettings>
                    <o:AllowPNG></o:AllowPNG>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
        <![endif]-->
        <!--[if !mso]><!-- -->
        <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet" />
        <!--<![endif]-->
    </head>

    <body style="background-color: #D4F3FE;">
        <div class="es-wrapper-color">
            <!--[if gte mso 9]>
                <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                    <v:fill type="tile" color="#d4f3fe"></v:fill>
                </v:background>
            <![endif]-->
            <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                    <tr>
                        <td class="esd-email-paddings" valign="top">
                            <table cellpadding="0" cellspacing="0" class="esd-header-popover es-header" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p20" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="es-m-p0r esd-container-frame" valign="top" align="center">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-image" style="font-size: 0px;">
                                                                                            <a target="_blank" href="https://viewstripo.email">
                                                                                                <img
                                                                                                    src="https://qmwyyc.stripocdn.email/content/guids/CABINET_0ee1c5a7ffbcbc022a316635d5ce8f13/images/group_116.png"
                                                                                                    alt="Logo"
                                                                                                    style="display: block;"
                                                                                                    height="60"
                                                                                                    title="Logo"
                                                                                                />
                                                                                            </a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table class="es-content-body" style="background-color: #ffffff;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure" align="left">
                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="es-m-p0r es-m-p20b esd-container-frame" width="600" valign="top" align="center">
                                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-banner" style="position: relative;" esdev-config="h1">
                                                                                            <a target="_blank" href="https://viewstripo.email">
                                                                                                <img
                                                                                                    class="adapt-img esdev-stretch-width esdev-banner-rendered"
                                                                                                    src="https://qmwyyc.stripocdn.email/content/guids/bannerImgGuid/images/image16620443057282756.png"
                                                                                                    alt="World tourism day"
                                                                                                    title="World tourism day"
                                                                                                    width="600"
                                                                                                    style="display: block;"
                                                                                                />
                                                                                            </a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p30b es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-m-txt-c es-p40r es-p40l es-m-p0r es-m-p0l">
                                                                                            <p>
                                                                                                On the occasion of <strong>${req.body.name}</strong>, I wish that you are blessed with more and more holidays to see many more new places and
                                                                                                create beautiful memories to cherish and leave footprints for others to follow.
                                                                                            </p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-m-txt-c es-p20t es-p40r es-p40l es-m-p0r es-m-p0l">
                                                                                            <p>Shop now and save up to 25% with our autumn deals</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-button es-p20t">
                                                                                            <!--[if mso]>
                                                                                                <a href="https://viewstripo.email" target="_blank" hidden>
                                                                                                    <v:roundrect
                                                                                                        xmlns:v="urn:schemas-microsoft-com:vml"
                                                                                                        xmlns:w="urn:schemas-microsoft-com:office:word"
                                                                                                        esdevVmlButton
                                                                                                        href="https://viewstripo.email"
                                                                                                        style="height: 41px; v-text-anchor: middle; width: 215px;"
                                                                                                        arcsize="24%"
                                                                                                        stroke="f"
                                                                                                        fillcolor="#bd242b"
                                                                                                    >
                                                                                                        <w:anchorlock></w:anchorlock>
                                                                                                        <center
                                                                                                            style="
                                                                                                                color: #ffffff;
                                                                                                                font-family: arial, 'helvetica neue', helvetica, sans-serif;
                                                                                                                font-size: 15px;
                                                                                                                font-weight: 400;
                                                                                                                line-height: 15px;
                                                                                                                mso-text-raise: 1px;
                                                                                                            "
                                                                                                        >
                                                                                                            Shopping for Travel
                                                                                                        </center>
                                                                                                    </v:roundrect>
                                                                                                </a>
                                                                                            <![endif]-->
                                                                                            <!--[if !mso]><!-- -->
                                                                                            <span class="es-button-border msohide"><a href="https://viewstripo.email" class="es-button" target="_blank">Shopping for Travel</a></span>
                                                                                            <!--<![endif]-->
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p20" align="left">
                                                            <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="472" valign="top"><![endif]-->
                                                            <table cellpadding="0" cellspacing="0" align="left" class="es-left">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="472" class="esd-container-frame es-m-p20b" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-text">
                                                                                            <h1>Especially&nbsp;&nbsp;for you<br /></h1>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <!--[if mso]></td><td width="20"></td><td width="68" valign="top"><![endif]-->
                                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="68" align="left" class="esd-container-frame">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="right" class="esd-block-text es-p10t es-m-p0 es-m-txt-l">
                                                                                            <p>
                                                                                                <strong>
                                                                                                    <u><a target="_blank" href="https://viewstripo.email">MORE</a></u>
                                                                                                </strong>
                                                                                            </p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <!--[if mso]></td></tr></table><![endif]-->
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-spacer" style="font-size: 0;">
                                                                                            <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="border-bottom: 1px solid #9cd3ec; background: unset; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left">
                                                            <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="194" valign="top"><![endif]-->
                                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="174" class="es-m-p0r esd-container-frame es-m-p20b" align="center" esdev-config="h2">
                                                                            <table
                                                                                cellpadding="0"
                                                                                cellspacing="0"
                                                                                width="100%"
                                                                                style="border-width: 1px; border-style: solid; border-color: #9cd3ec; border-radius: 5px; border-collapse: separate; background-color: #fafafa;"
                                                                                bgcolor="#FAFAFA"
                                                                            >
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-image es-p5" style="font-size: 0px;">
                                                                                            <a target="_blank" href="https://viewstripo.email">
                                                                                                <img
                                                                                                    class="p_image adapt-img"
                                                                                                    src="https://qmwyyc.stripocdn.email/content/guids/CABINET_f9a1aa031b0165640302dd0498af20c9/images/24381626939865128.jpg"
                                                                                                    alt
                                                                                                    style="display: block;"
                                                                                                    width="162"
                                                                                                />
                                                                                            </a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td width="20" class="es-hidden"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td width="174" class="esd-container-frame es-m-p20b" align="center" esdev-config="h3">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-text es-p5t es-p5b">
                                                                                            <h3 class="p_name">Hiking Boots</h3>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-text es-p5t">
                                                                                            <p><s class="p_old_price">$ 459.00</s><span style="color: #bd242b;" class="p_price"> $ 359.00</span></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-button es-p15t">
                                                                                            <!--[if mso]>
                                                                                                <a href="https://viewstripo.email" target="_blank" hidden>
                                                                                                    <v:roundrect
                                                                                                        xmlns:v="urn:schemas-microsoft-com:vml"
                                                                                                        xmlns:w="urn:schemas-microsoft-com:office:word"
                                                                                                        esdevVmlButton
                                                                                                        href="https://viewstripo.email"
                                                                                                        style="height: 41px; v-text-anchor: middle; width: 131px;"
                                                                                                        arcsize="24%"
                                                                                                        stroke="f"
                                                                                                        fillcolor="#bd242b"
                                                                                                    >
                                                                                                        <w:anchorlock></w:anchorlock>
                                                                                                        <center
                                                                                                            style="
                                                                                                                color: #ffffff;
                                                                                                                font-family: arial, 'helvetica neue', helvetica, sans-serif;
                                                                                                                font-size: 15px;
                                                                                                                font-weight: 400;
                                                                                                                line-height: 15px;
                                                                                                                mso-text-raise: 1px;
                                                                                                            "
                                                                                                        >
                                                                                                            Buy Now
                                                                                                        </center>
                                                                                                    </v:roundrect>
                                                                                                </a>
                                                                                            <![endif]-->
                                                                                            <!--[if !mso]><!-- -->
                                                                                            <span class="es-button-border msohide"><a href="https://viewstripo.email" class="es-button" target="_blank">Buy Now</a></span>
                                                                                            <!--<![endif]-->
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <!--[if mso]></td><td width="173" valign="top"><![endif]-->
                                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="173" class="es-m-p0r esd-container-frame es-m-p20b" align="center" esdev-config="h4">
                                                                            <table
                                                                                cellpadding="0"
                                                                                cellspacing="0"
                                                                                width="100%"
                                                                                style="border-width: 1px; border-style: solid; border-color: #9cd3ec; border-radius: 5px; border-collapse: separate; background-color: #fafafa;"
                                                                                bgcolor="#FAFAFA"
                                                                            >
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-image es-p5" style="font-size: 0px;">
                                                                                            <a target="_blank" href="https://viewstripo.email">
                                                                                                <img
                                                                                                    class="p_image adapt-img"
                                                                                                    src="https://qmwyyc.stripocdn.email/content/guids/CABINET_f9a1aa031b0165640302dd0498af20c9/images/83001626939864210.jpg"
                                                                                                    alt
                                                                                                    style="display: block;"
                                                                                                    width="161"
                                                                                                />
                                                                                            </a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td width="173" class="esd-container-frame es-m-p20b" align="center" esdev-config="h5">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-text es-p5t es-p5b">
                                                                                            <h3 class="p_name">Raincoat</h3>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-text es-p5t">
                                                                                            <p><s class="p_old_price">$ 125.00</s>&nbsp;<span style="color: #bd242b;" class="p_price">$ 99.00</span></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-button es-p15t">
                                                                                            <!--[if mso]>
                                                                                                <a href="https://viewstripo.email" target="_blank" hidden>
                                                                                                    <v:roundrect
                                                                                                        xmlns:v="urn:schemas-microsoft-com:vml"
                                                                                                        xmlns:w="urn:schemas-microsoft-com:office:word"
                                                                                                        esdevVmlButton
                                                                                                        href="https://viewstripo.email"
                                                                                                        style="height: 41px; v-text-anchor: middle; width: 131px;"
                                                                                                        arcsize="24%"
                                                                                                        stroke="f"
                                                                                                        fillcolor="#bd242b"
                                                                                                    >
                                                                                                        <w:anchorlock></w:anchorlock>
                                                                                                        <center
                                                                                                            style="
                                                                                                                color: #ffffff;
                                                                                                                font-family: arial, 'helvetica neue', helvetica, sans-serif;
                                                                                                                font-size: 15px;
                                                                                                                font-weight: 400;
                                                                                                                line-height: 15px;
                                                                                                                mso-text-raise: 1px;
                                                                                                            "
                                                                                                        >
                                                                                                            Buy Now
                                                                                                        </center>
                                                                                                    </v:roundrect>
                                                                                                </a>
                                                                                            <![endif]-->
                                                                                            <!--[if !mso]><!-- -->
                                                                                            <span class="es-button-border msohide"><a href="https://viewstripo.email" class="es-button" target="_blank">Buy Now</a></span>
                                                                                            <!--<![endif]-->
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <!--[if mso]></td><td width="20"></td><td width="173" valign="top"><![endif]-->
                                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="173" class="es-m-p0r esd-container-frame es-m-p20b" align="center" esdev-config="h6">
                                                                            <table
                                                                                cellpadding="0"
                                                                                cellspacing="0"
                                                                                width="100%"
                                                                                style="border-width: 1px; border-style: solid; border-color: #9cd3ec; border-radius: 5px; border-collapse: separate; background-color: #fafafa;"
                                                                                bgcolor="#FAFAFA"
                                                                            >
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-image es-p5" style="font-size: 0px;">
                                                                                            <a target="_blank" href="https://viewstripo.email">
                                                                                                <img
                                                                                                    class="p_image adapt-img"
                                                                                                    src="https://qmwyyc.stripocdn.email/content/guids/CABINET_f9a1aa031b0165640302dd0498af20c9/images/50461626939864212.jpg"
                                                                                                    alt
                                                                                                    style="display: block;"
                                                                                                    width="161"
                                                                                                />
                                                                                            </a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td width="173" class="esd-container-frame" align="center" esdev-config="h7">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-text es-p5t es-p5b">
                                                                                            <h3 class="p_name">Folding chair</h3>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-text es-p5t">
                                                                                            <p><s class="p_old_price">$ 349.00</s><span style="color: #bd242b;" class="p_price">$159.00</span></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-button es-p15t">
                                                                                            <!--[if mso]>
                                                                                                <a href="https://viewstripo.email" target="_blank" hidden>
                                                                                                    <v:roundrect
                                                                                                        xmlns:v="urn:schemas-microsoft-com:vml"
                                                                                                        xmlns:w="urn:schemas-microsoft-com:office:word"
                                                                                                        esdevVmlButton
                                                                                                        href="https://viewstripo.email"
                                                                                                        style="height: 41px; v-text-anchor: middle; width: 131px;"
                                                                                                        arcsize="24%"
                                                                                                        stroke="f"
                                                                                                        fillcolor="#bd242b"
                                                                                                    >
                                                                                                        <w:anchorlock></w:anchorlock>
                                                                                                        <center
                                                                                                            style="
                                                                                                                color: #ffffff;
                                                                                                                font-family: arial, 'helvetica neue', helvetica, sans-serif;
                                                                                                                font-size: 15px;
                                                                                                                font-weight: 400;
                                                                                                                line-height: 15px;
                                                                                                                mso-text-raise: 1px;
                                                                                                            "
                                                                                                        >
                                                                                                            Buy Now
                                                                                                        </center>
                                                                                                    </v:roundrect>
                                                                                                </a>
                                                                                            <![endif]-->
                                                                                            <!--[if !mso]><!-- -->
                                                                                            <span class="es-button-border msohide"><a href="https://viewstripo.email" class="es-button" target="_blank">Buy Now</a></span>
                                                                                            <!--<![endif]-->
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <!--[if mso]></td></tr></table><![endif]-->
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="es-footer esd-footer-popover" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p40t es-p20b es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-m-txt-c">
                                                                                            <h2>Any questions? <a href="https://viewstripo.email" target="_blank">We're here to help!</a></h2>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-social es-p20t es-p30b" style="font-size: 0;">
                                                                                            <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td align="center" valign="top" class="es-p30r">
                                                                                                            <a target="_blank" href="https://viewstripo.email">
                                                                                                                <img
                                                                                                                    title="Facebook"
                                                                                                                    src="https://qmwyyc.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png"
                                                                                                                    alt="Fb"
                                                                                                                    height="24"
                                                                                                                />
                                                                                                            </a>
                                                                                                        </td>
                                                                                                        <td align="center" valign="top" class="es-p30r">
                                                                                                            <a target="_blank" href="https://viewstripo.email">
                                                                                                                <img
                                                                                                                    title="Twitter"
                                                                                                                    src="https://qmwyyc.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png"
                                                                                                                    alt="Tw"
                                                                                                                    height="24"
                                                                                                                />
                                                                                                            </a>
                                                                                                        </td>
                                                                                                        <td align="center" valign="top" class="es-p30r">
                                                                                                            <a target="_blank" href="https://viewstripo.email">
                                                                                                                <img
                                                                                                                    title="Instagram"
                                                                                                                    src="https://qmwyyc.stripocdn.email/content/assets/img/social-icons/circle-colored/instagram-circle-colored.png"
                                                                                                                    alt="Inst"
                                                                                                                    height="24"
                                                                                                                />
                                                                                                            </a>
                                                                                                        </td>
                                                                                                        <td align="center" valign="top">
                                                                                                            <a target="_blank" href="https://viewstripo.email">
                                                                                                                <img
                                                                                                                    title="Youtube"
                                                                                                                    src="https://qmwyyc.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png"
                                                                                                                    alt="Yt"
                                                                                                                    height="24"
                                                                                                                />
                                                                                                            </a>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text">
                                                                                            <p>We don't want you to miss out, but if you have to, you can&nbsp;<a href="https://viewstripo.email" target="_blank">unsubscribe</a>.</p>
                                                                                            <p><br /></p>
                                                                                            <p>
                                                                                                Copyright © 2022 Delivery, All rights reserved.<br />
                                                                                                <br />
                                                                                            </p>
                                                                                            <p>5611 Stony Horse Wharf, Ninilchik, Oregon</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="left">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-image es-infoblock made_with" style="font-size: 0;">
                                                                                            <a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=delivery&utm_content=best_tourist">
                                                                                                <img
                                                                                                    src="https://qmwyyc.stripocdn.email/content/guids/CABINET_09023af45624943febfa123c229a060b/images/7911561025989373.png"
                                                                                                    alt
                                                                                                    width="125"
                                                                                                    style="display: block;"
                                                                                                />
                                                                                            </a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
</html>






        `
    });
   await transpote.sendMail({
        from:`Subcribe club`, 
        to: process.env.EMAIL_ADDRESS,  
        subject:"New Subcriber",  
        text: `
        Name: ${req.body.name},
        Email: ${req.body.email},
        Age: ${req.body.age},
        Skil: ${req.body.skills}
        `
    });

    // await axios.get(`https://bulksmsbd.net/api/smsapi?api_key=cxVzYEy04o7WVqpJOf77&type=text&number=${req.body.call}&senderid=8809612443880&message= Hi ${req.body.name}, you get a sms, and the age filde is ${req.body.age} also you are a  ${req.body.skills} dev`);

    await sendSMS('+8801903211039', 'Vonage APIs', `Hi ${req.body.name} your skill is  ${req.body.skills} dev and now we testing`);






    res.status(200).json(req.body);
};