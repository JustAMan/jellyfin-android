define(["jQuery"],function(e){function n(n,a){d=a,a.Policy.IsDisabled?e(".disabledUserBanner",n).show():e(".disabledUserBanner",n).hide(),"Guest"==a.ConnectLinkType?(e("#fldConnectInfo",n).hide(),e("#txtUserName",n).prop("disabled","disabled")):(e("#txtUserName",n).prop("disabled","").removeAttr("disabled"),e("#fldConnectInfo",n).show()),e(".lnkEditUserPreferences",n).attr("href","mypreferencesmenu.html?userId="+a.Id),Dashboard.setPageTitle(a.Name),e("#txtUserName",n).val(a.Name),e("#txtConnectUserName",n).val(d.ConnectUserName),e("#chkIsAdmin",n).checked(a.Policy.IsAdministrator),e("#chkDisabled",n).checked(a.Policy.IsDisabled),e("#chkIsHidden",n).checked(a.Policy.IsHidden),e("#chkRemoteControlSharedDevices",n).checked(a.Policy.EnableSharedDeviceControl),e("#chkEnableRemoteControlOtherUsers",n).checked(a.Policy.EnableRemoteControlOfOtherUsers),e("#chkEnableDownloading",n).checked(a.Policy.EnableContentDownloading),e("#chkManageLiveTv",n).checked(a.Policy.EnableLiveTvManagement),e("#chkEnableLiveTvAccess",n).checked(a.Policy.EnableLiveTvAccess),e("#chkEnableContentDeletion",n).checked(a.Policy.EnableContentDeletion),e("#chkDisableUserPreferences",n).checked(!a.Policy.EnableUserPreferenceAccess),e("#chkEnableMediaPlayback",n).checked(a.Policy.EnableMediaPlayback),e("#chkEnableAudioPlaybackTranscoding",n).checked(a.Policy.EnableAudioPlaybackTranscoding),e("#chkEnableVideoPlaybackTranscoding",n).checked(a.Policy.EnableVideoPlaybackTranscoding),e("#chkEnableSync",n).checked(a.Policy.EnableSync),e("#chkEnableSyncTranscoding",n).checked(a.Policy.EnableSyncTranscoding),e("#chkEnableSharing",n).checked(a.Policy.EnablePublicSharing),Dashboard.hideLoadingMsg()}function a(e,n,a,o){var i=e.ConnectUserName||"",l=n,t=ApiClient.getUrl("Users/"+e.Id+"/Connect/Link");i&&!l?ApiClient.ajax({type:"DELETE",url:t}).then(function(){Dashboard.alert({message:Globalize.translate("MessageEmbyAccontRemoved"),title:Globalize.translate("HeaderEmbyAccountRemoved"),callback:a})},function(){Dashboard.alert({message:Globalize.translate("ErrorRemovingEmbyConnectAccount")})}):i!=l?ApiClient.ajax({type:"POST",url:t,data:{ConnectUsername:l},dataType:"json"}).then(function(e){var n=e.IsPending?"MessagePendingEmbyAccountAdded":"MessageEmbyAccountAdded";Dashboard.alert({message:Globalize.translate(n),title:Globalize.translate("HeaderEmbyAccountAdded"),callback:a})},function(){c(".")}):o&&o()}function c(e){var n;e?(n=Globalize.translate("ErrorAddingEmbyConnectAccount1",'<a href="https://emby.media/connect" target="_blank">https://emby.media/connect</a>'),n+="<br/><br/>"+Globalize.translate("ErrorAddingEmbyConnectAccount2","apps@emby.media")):n=Globalize.translate("DefaultErrorMessage"),Dashboard.alert({message:n})}function o(n,c){Dashboard.hideLoadingMsg();var o=d.ConnectUserName||"",i=e("#txtConnectUserName",n).val();o==i?require(["toast"],function(e){e(Globalize.translate("SettingsSaved"))}):a(c,e("#txtConnectUserName",n).val(),function(){r(n)})}function i(n,a){n.Name=e("#txtUserName",a).val(),n.Policy.IsAdministrator=e("#chkIsAdmin",a).checked(),n.Policy.IsHidden=e("#chkIsHidden",a).checked(),n.Policy.IsDisabled=e("#chkDisabled",a).checked(),n.Policy.EnableRemoteControlOfOtherUsers=e("#chkEnableRemoteControlOtherUsers",a).checked(),n.Policy.EnableLiveTvManagement=e("#chkManageLiveTv",a).checked(),n.Policy.EnableLiveTvAccess=e("#chkEnableLiveTvAccess",a).checked(),n.Policy.EnableContentDeletion=e("#chkEnableContentDeletion",a).checked(),n.Policy.EnableUserPreferenceAccess=!e("#chkDisableUserPreferences",a).checked(),n.Policy.EnableSharedDeviceControl=e("#chkRemoteControlSharedDevices",a).checked(),n.Policy.EnableMediaPlayback=e("#chkEnableMediaPlayback",a).checked(),n.Policy.EnableAudioPlaybackTranscoding=e("#chkEnableAudioPlaybackTranscoding",a).checked(),n.Policy.EnableVideoPlaybackTranscoding=e("#chkEnableVideoPlaybackTranscoding",a).checked(),n.Policy.EnableContentDownloading=e("#chkEnableDownloading",a).checked(),n.Policy.EnableSync=e("#chkEnableSync",a).checked(),n.Policy.EnableSyncTranscoding=e("#chkEnableSyncTranscoding",a).checked(),n.Policy.EnablePublicSharing=e("#chkEnableSharing",a).checked(),ApiClient.updateUser(n).then(function(){ApiClient.updateUserPolicy(n.Id,n.Policy).then(function(){o(a,n)})})}function l(){var n=e(this).parents(".page");return Dashboard.showLoadingMsg(),t().then(function(e){i(e,n)}),!1}function t(){var e=getParameterByName("userId");return ApiClient.getUser(e)}function r(e){Dashboard.showLoadingMsg(),t().then(function(a){n(e,a)})}var d;e(document).on("pageinit","#editUserPage",function(){e(".editUserProfileForm").off("submit",l).on("submit",l)}).on("pagebeforeshow","#editUserPage",function(){var e=this;r(e)})});