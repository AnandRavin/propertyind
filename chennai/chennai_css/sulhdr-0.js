var gProtocol = (('http:' == document.location.protocol) ? 'http://' : 'https://');
$SUL = jQuery.noConflict();

/*Error Handle Begin*/
var errordialog = function (msg, url, linenumber) {
    /*var dialog = document.createElement("div");
    dialog.className = 'errordialog';
    dialog.innerHTML = '&nbsp;<b style="color:red">JavaScript Error: </b>' + msg + ' at line number ' + linenumber + '. Please inform webmaster.';
    if (document.body != null)
    document.body.appendChild(dialog);
    return true*/
}
window.onerror = function (msg, url, linenumber) {
    return errordialog('Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber);
}
/*Error Handle End*/
SulHeader =
{
    Common:
    {
        getCookie: function (name) {
            var dc = document.cookie;
            var prefix = name + "=";
            var begin = dc.indexOf("; " + prefix);
            if (begin == -1) {
                begin = dc.indexOf(prefix);
                if (begin != 0) return null;
            }
            else
                begin += 2;
            var end = document.cookie.indexOf(";", begin);
            if (end == -1)
                end = dc.length;
            return unescape(dc.substring(begin + prefix.length, end));
        },
        resizeIframe: function (sHeight, sWidth) {
            SulHeader.Auth.isReg = 1;
            if (sHeight != '')
                $SUL("#signin_india").dialog("option", "height", sHeight);
            if (sWidth != '')
                $SUL("#signin_india").dialog("option", "width", sWidth);
        },
        isEmptyParam: function (param) {
            if (param == undefined || param == '' || param == null)
                return true;
            else
                return false;
        },
        bookmark: function (url, title) {
            if (SulHeader.Common.isEmptyParam(url))
                url = document.URL;
            if (SulHeader.Common.isEmptyParam(title))
                title = "Sulekha.Com";
            if (window.sidebar) {
                window.sidebar.addPanel(title, url, "");
            }
            else if (window.opera && window.print) {
                var elem = document.createElement('a');
                elem.setAttribute('href', url);
                elem.setAttribute('title', title);
                elem.setAttribute('rel', 'sidebar');
                elem.click();
            }
            else if (document.all)
                window.external.AddFavorite(url, title);
            else {
                alert("This Browser doesn't support manual bookmark press ctrl+D to bookmark");
            }
        },
        bookmarkPage: function (holder, url, title) {
            if (!SulHeader.Common.isEmptyParam(holder)) {
                $SUL('#' + holder).ready(function () {
                    $SUL('#' + holder).bind('click', function (event) { SulHeader.Common.bookmark(url, title); });
                    if ($SUL('#' + holder + "_close").length > 0)
                        $SUL('#' + holder + "_close").bind('click', function (event) { $SUL('#' + holder + "_panel").hide(); });
                });
            }
            else
                SulHeader.Common.bookmark(url, title);
        },
        enter: function (holder, method, param) {
            $SUL(holder).bind('keyup', function (event) {
                if (event.keyCode == 13)
                    eval(method)(param);
            });
        },
        PageEventTrack: function (classHolder) {
            if (SulHeader.Common.isEmptyParam(classHolder)) { classHolder = 'EVTTrack'; }
            $SUL('.' + classHolder).each(function (i, obj) {
                var cls = $SUL(this).attr("class");
                var classes = cls.split(" ");
                for (clsID = 0; clsID < classes.length; clsID++) {
                    if (classes[clsID].substring(0, 4) == "GAQ_") {
                        try {
                            var Params = classes[clsID].split("_");
                            var Event = Params[1].substring(0, 1);
                            var pgCategory = Params[2] + '';
                            var pgAction = Params[3] + '';
                            var pgValues = '';
                            var EventName = SulHeader.Common.getEventName(Event);
                            if (Params[4] != undefined) { pgValues = Params[4]; }
                            if (!SulHeader.Common.isEmptyParam(EventName) && !SulHeader.Common.isEmptyParam(pgCategory) && !SulHeader.Common.isEmptyParam(pgAction)) {
                                //alert('EventName=' + EventName + ';pgCategory=' + pgCategory + ';pgAction=' + pgAction + ';pgValues=' + pgValues);
                                $SUL(this).bind(EventName, function (e) { _gaq.push(['_trackEvent', pgCategory, pgAction, pgValues, 1]); });
                            }
                        }
                        catch (ex) {
                            //alert(ex.Description);
                        }
                    }
                }
            });
        },
        getEventName: function (EventID) {
            var EventName = "";
            switch (EventID) {
                case "C":
                    EventName = "click";
                    break;
                case "B":
                    EventName = "blur";
                    break;
                case "F":
                    EventName = "focus";
                    break;
                case "M":
                    EventName = "mouseover";
                    break;
                case "K":
                    EventName = "keypress";
                    break;
                default:
                    EventName = "click";
                    break;
            }
            return EventName;
        }
    },
    ServiceHeader: {
        Init: function (service, servicetab) {
            SulHeader.Common.bookmarkPage('sul_mpbookmark', '', 'Welcome to Sulekha.Com');
            $SUL('#sul_mptabul li').each(function () {
                $SUL(this).hover(function () {
                    var p = $SUL(this);
                    var offset = p.offset();
                    var curliid = this.id;
                    timer = setTimeout(function () {
                        $SUL("#" + curliid + "dd").css("left", offset.left - 5);
                        $SUL("#" + curliid + "dd").css("top", offset.top + 32);
                        $SUL("#" + curliid + "dd").show();
                    }, 500);
                },
                function () { clearTimeout(timer); $SUL("#" + this.id + "dd").hide(); });
                $SUL("#" + this.id + "dd").hover(function () { $SUL("#" + this.id).show(); $SUL("#" + this.id.replace('dd', '') + " a.gSMListLnk").addClass("gActive"); },
                    function () { $SUL("#" + this.id).hide(); $SUL("#" + this.id.replace('dd', '') + " a.gSMListLnk").removeClass("gActive"); })
            });
        }
    },
    Init: function (Srchholder, Srchdef) {
        $SUL("#signin_india").overlay({ mask: { color: '#000000', loadSpeed: 200, opacity: 0.8 }, closeOnClick: true, load: false });
        $SUL("#signin_india").find('a.close').bind('click', function () { $SUL('#signin_india').css('display', 'none'); });
        SulHeader.Auth.setLoginBar();
        $SUL(document).keyup(function (e) { if (e.keyCode == 27) { $SUL('#signin_india').css('display', 'none'); } });
        if (SulHeader.Common.isEmptyParam(Srchholder))
            Srchholder = 'sul_gblsearch';
        if (SulHeader.Common.isEmptyParam(Srchdef))
            Srchdef = 'Enter Keyword';
        SulHeader.Search.Init(Srchholder, Srchdef);
        $SUL(window).scroll(function () {
            if ($SUL(this).scrollTop() > 100) { $SUL("#sul_gblmarketplace").show(); $SUL("#sul_gblmarketplace").addClass("gNScroll"); }
            else { if ($SUL(window).width() < 780) { $SUL("#sul_gblmarketplace").hide(); } $SUL("#sul_gblmarketplace").removeClass("gNScroll"); }
        });
        SulHeader.Common.PageEventTrack();
    },
    Search:
    {
        Init: function (holder, def) {
            holder = "#" + holder;
            $SUL(holder + "c").click(function (event) {
                event.stopPropagation();
                $SUL(holder + "p").show();
                $SUL(holder + "l ul li a").click(function () {
                    $SUL(this).parents(holder + "l").find("ul li a.gActive").removeClass("gActive");
                    $SUL(this).addClass("gActive");
                    $SUL(holder + "t").html($SUL(this).html() + "<span class='gDGArrow'></span>");
                    $SUL(holder + "c").html($SUL(this).html() + "<span class='gDGArrow'></span>");
                    $SUL(holder + "city").val($SUL(this).html().replace(/\s+/g, '-').toLowerCase());
                    $SUL(holder + "p").hide();
                });
            });
            $SUL(holder + "p").click(function (c) { $SUL(this).hide() });
            if (!SulHeader.Common.isEmptyParam(def)) {
                $SUL(holder + "i").val(def);
                $SUL(holder + "i").bind('focusin', function (event) {
                    if ($SUL(holder + "i").val() == def) {
                        $SUL(holder + "i").val('');
                    }
                });
                $SUL(holder + "i").bind('focusout', function (event) {
                    if ($SUL(holder + "i").val() == '') {
                        $SUL(holder + "i").val(def);
                    }
                });
            }
            $SUL(holder + "i").click(function (event) {
                $SUL(this).css("color", "#000");
                $SUL(this).blur(function () {
                    if ($SUL(this).val() == "") {
                        $SUL(this).val(def);
                    }
                    $SUL(this).css("color", "#CCC");
                });
                SulHeader.Common.enter(holder + "i", SulHeader.Search.searchClick, holder);
            });
            $SUL(holder + "b").bind('click', function (event) {
                if ($SUL(holder + "i").val().toLowerCase() != def.toLowerCase())
                    SulHeader.Search.searchClick(holder);
            });
            $SUL('body').bind('click', function (e) {
                if ($SUL(e.target).closest('.gsuldropdown').length == 0) {
                    $SUL(".gsuldropdown").hide();
                }
            });
            var mycity = SulHeader.Common.getCookie('mycity');
            var ipcity = SulHeader.Common.getCookie('ipcity');
            var sUserCity = '';
            if (!SulHeader.Common.isEmptyParam(mycity))
                sUserCity = mycity;
            else if (!SulHeader.Common.isEmptyParam(ipcity))
                sUserCity = ipcity;
            else
                sUserCity = 'Chennai';

            sCityArrow = '<span class="gDGArrow"></span>';
            $SUL(holder + 'c').html(sUserCity + sCityArrow).attr('title', sUserCity);
            $SUL(holder + 't').html(sUserCity + sCityArrow).attr('title', sUserCity);
            $SUL(holder + 'city').val(sUserCity);
            $SUL(holder + 'l ul li a').each(function () { if ($SUL(this).html() == sUserCity) { $SUL(this).addClass("gActive"); } });
        },
        searchClick: function (holder) {
            var host = 'www.sulekha.com';
            if (!SulHeader.Common.isEmptyParam(window.location.host))
                host = window.location.host;
            if ($SUL(holder + "i").val().length > 0)
                window.location.href = "http://search.sulekha.com/sulekhasearch.aspx?loc=" + $SUL(holder + 'city').val() + "&ref=" + host + "&txtsearch=" + $SUL(holder + "i").val();
            else
                alert("Enter keywords to search.");
        }
    },
    CurrentUser:
    {
        name: '',
        url: '',
        id: '',
        photo: '',
        firstName: '',
        lastName: '',
        loggedsite: 'sulekha',
        loggedsiteid: 1,
        gatherDetail: function () {
            if (SulHeader.Common.getCookie('sulekha_screenname') != null && SulHeader.Common.getCookie('tp_ud') == null) {
                this.name = SulHeader.Common.getCookie('sulekha_screenname');
                this.url = SulHeader.Common.getCookie('sulekha_baseaddress');
                this.id = '';
                var sUrl = this.url;
                if (SulHeader.Common.isEmptyParam(this.name))
                    this.name = 'Member';
                if (SulHeader.Common.isEmptyParam(this.url.replace('http://', '')))
                    this.url = 'http://www.sulekha.com/myhome.aspx?t=[timestamp]';
                if (sUrl != null && sUrl != 'http://www.sulekha.com/myhome.aspx' && sUrl != '') {
                    sUrl = sUrl.replace('.sulekha.com', '').replace('http://', '');
                    if (!SulHeader.Common.isEmptyParam(sUrl))
                        this.photo = 'http://www1.sulekha.com/mstore/' + sUrl + '/profile/photo/thumbnail/default-42x42.jpg';
                    else
                        this.photo = 'http://www.sulekha.com/mstore/unknown-42x42.jpg';
                }
                else
                    this.photo = 'http://www.sulekha.com/mstore/unknown-42x42.jpg';
                this.loggedsite = 'sulekha';
                this.loggedsiteid = 1;
            }
            else if (SulHeader.Common.getCookie('tp_ud') != null) {
                var sUserDetail = SulHeader.Common.getCookie('tp_ud');
                this.name = sUserDetail.split("::")[2];
                this.url = sUserDetail.split("::")[4];
                this.id = sUserDetail.split("::")[1];
                this.photo = sUserDetail.split("::")[5];
                if (this.photo.indexOf('/mstore//profile/photo') > 0)
                    this.photo = 'http://www.sulekha.com/mstore/unknown-42x42.jpg';
                if (sUserDetail.split("::").length > 6) {
                    this.firstName = sUserDetail.split("::")[6];
                }
                if (sUserDetail.split("::").length > 7) {
                    this.lastName = sUserDetail.split("::")[7];
                }
                this.loggedsite = sUserDetail.split("::")[0];

                if (SulHeader.Common.isEmptyParam(this.name))
                    this.name = 'Member';
                if (SulHeader.Common.isEmptyParam(this.url.replace('http://', '')))
                    this.url = 'http://www.sulekha.com/myhome.aspx?t=[timestamp]';
                if (this.loggedsite == 'local' || this.loggedsite == 'sulekha')
                    this.loggedsiteid = 1;
                else if (this.loggedsite == 'facebook')
                    this.loggedsiteid = 2;
                else if (this.loggedsite == 'google')
                    this.loggedsiteid = 3;
                else if (this.loggedsite == 'twitter')
                    this.loggedsiteid = 4;
            }
        }
    },
    Auth:
    {
        CallBack_Success: '',
        CallBack_Failure: '',
        isReg: 0,
        Version: '2',
        RegPath: 'http://myaccount.sulekha.com/network/register.aspx',
        Path: 'http://myaccount.sulekha.com/network/signin.aspx',
        isLoggedin: function (loginservice) {
            var iStatus = 0;
            var sUserDetail = "";
            var sService = "";
            if (SulHeader.Common.getCookie('tp_ud') != null) {
                sUserDetail = SulHeader.Common.getCookie('tp_ud');
                sService = sUserDetail.split("::")[0];
            }
            if (loginservice == '' || loginservice == 'all' || loginservice == undefined || loginservice == 'popup') {
                if (SulHeader.Common.getCookie('sulekha_screenname') != null)
                    iStatus = 1;
                else if (SulHeader.Common.getCookie('tp_ud') != null)
                    iStatus = 1;
            }
            else if (loginservice == 'sulekha') {
                if (SulHeader.Common.getCookie('sulekha_screenname') != null)
                    iStatus = 1;
                else if (sService == "sulekha" || sService == "local")
                    iStatus = 1;
            }
            else if (loginservice == "facebook" && sService == "facebook")
                iStatus = 1;
            else if (loginservice == "google" && sService == "google")
                iStatus = 1;
            else if (loginservice == "twitter" && sService == "twitter")
                iStatus = 1;
            if (iStatus == 1)
                SulHeader.CurrentUser.gatherDetail();
            return iStatus;
        },
        ensureLoggedIn: function (loginservice, callback, version) {
            if (!SulHeader.Common.isEmptyParam(version)) { if (version > 0) { this.Version = version; } }
            this.CallBack_Success = callback;
            if (this.isLoggedin(loginservice) == 1) {
                eval(callback)();
            }
            else
                this.popupLoginCtrl(loginservice);
        },
        popupRegisterCtrl: function (nexturl, email) {
            var frMyAccount = $SUL('#frMyAccount').attr('src') + '';
            if (frMyAccount == "" || frMyAccount == "http://api.sulekhalive.com/html/dummy.html")
                $SUL('#frMyAccount').attr('src', this.Path);
            if ($SUL('#signin_india').length > 0) {
                $SUL("#signin_india").data("overlay").load();
            }
            else {
                $SUL("#signin").data("overlay").load();
            }
        },
        popupLoginCtrl: function (loginservice, version, fbautotrigg) {
            if (!SulHeader.Common.isEmptyParam(version)) { if (version > 0) { this.Version = version; } }
            if (!SulHeader.Common.isEmptyParam(this.Version)) {
                if (!SulHeader.Common.isEmptyParam(fbautotrigg))
                    version = '?atuotriggfb=true&ver=' + this.Version;
                else
                    version = '?ver=' + this.Version;
            }
            else {
                version = '';
            }
            var frMyAccount = $SUL('#frMyAccount').attr('src') + '';
            if (frMyAccount == "" || frMyAccount == "http://api.sulekhalive.com/html/dummy.html")
                $SUL('#frMyAccount').attr('src', this.Path + version);
            if ($SUL('#signin_india').length > 0) {
                $SUL("#signin_india").data("overlay").load();
            }
            else {
                $SUL("#signin").data("overlay").load();
            }
        },
        popupLoginClose: function (status) {
            $SUL('#divSignin_Dialog').dialog('close');
            if (status == 1)
                eval(this.CallBack_Success)();
            else if (status == 0 && this.isLoggedin('') == 1)
                eval(this.CallBack_Success)();
            else
                eval(this.CallBack_Failure)();
        },
        popupLoginCallBack: function (aIPCountry) {
            this.setLoginBar();
            $SUL('#signin').css('display', 'none');
            if (Sulekha != undefined)
                if (Sulekha.Auth != undefined)
                    this.CallBack_Success = Sulekha.Auth.CallBack_Success;
            if (this.CallBack_Success != '')
                eval(this.CallBack_Success)();
        },
        setLoginBar: function (version) {
            var sName = "";
            var sUserId = "";
            if (!SulHeader.Common.isEmptyParam(version)) { if (version > 0) { this.Version = version; } }
            if (SulHeader.Auth.isLoggedin()) {
                if (!SulHeader.Common.isEmptyParam(SulHeader.CurrentUser.firstName))
                    sName = SulHeader.CurrentUser.firstName;
                else if (!SulHeader.Common.isEmptyParam(SulHeader.CurrentUser.lastName))
                    sName = SulHeader.CurrentUser.lastName;
                else
                    sName = SulHeader.CurrentUser.name;
                sUserId = SulHeader.CurrentUser.id;
                if (sName.length > 20) { sName = sName.substring(0, 18) + '...'; }
                if (sUserId != null && sUserId != '' && sUserId != undefined) {
                    $SUL('#sul_loggedinul').html('<li><a href="http://myaccount.sulekha.com/" title="My Profile">My Profile</a></li><li><a href="http://myaccount.sulekha.com/classifiedads" title="My Classifieds Ads">My Classifieds Ads</a></li><li><a href="http://myaccount.sulekha.com/reviews" title="My Reviews">My Reviews</a></li><li><a href="http://myaccount.sulekha.com/rewards" title="My Rewards">My Rewards</a></li><li><a href="http://myaccount.sulekha.com/deals" title="My Deals">My Deals</a></li><li class="gLast"><a href="http://rivr.sulekha.com/myrivr.aspx" title="My Rivr">My Rivr</a></li>');

                    $SUL('#sul_logouttxt').attr('href', gProtocol + 'myaccount.sulekha.com/network/signout.aspx');
                    if (sName == null || sName == '' || sName == undefined) { sName = 'Member'; }
                    $SUL('#sul_loginname').html(sName); $SUL('#exposeMask').css('display', 'none');
                    $SUL('#signin_india').css('display', 'none'); $SUL('#sul_loggedout').css('display', 'none'); $SUL('#sul_loggedin').css('display', ''); $SUL('#sul_loggedindd').css('display', '');
                    $SUL("#sul_myaccount").click(function (event) {
                        event.stopPropagation();
                        if ($SUL("#sul_loggedindd").css('display') == '' || $SUL("#sul_loggedindd").css('display') == 'block')
                            $SUL("#sul_loggedindd").hide();
                        else
                            $SUL("#sul_loggedindd").show();
                        $SUL("#sul_logouttxt").click(function () { $SUL("#sul_loggedindd").hide(); });
                    });
                }
                else {
                    $SUL('#sul_loggedinul').children('li').remove(); $SUL('#sul_loggedout').css('display', ''); $SUL('#sul_loggedin').css('display', 'none'); $SUL('#sul_loggedindd').css('display', 'none');
                }
            }
            else {
                $SUL('#sul_loggedinul').children('li').remove();
                $SUL('#sul_loggedinul').children('li').remove(); $SUL('#sul_loggedout').css('display', ''); $SUL('#sul_loggedin').css('display', 'none'); $SUL('#sul_loggedindd').css('display', 'none');
            }
            $SUL('#sul_logintxt').click(function (event) { SulHeader.Auth.popupLoginCtrl(); });
            $SUL('#sul_regtxt').click(function (event) { SulHeader.Auth.popupLoginCtrl(); });
        }
    }
}