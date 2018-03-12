/*
* Name: jQuery RefSource
* Version: 1.2
* Summary: Get the referral source, search engine source and social source.
* Uses: url.js (https://github.com/websanova/js-url)
* Works with: js.cookie.js (https://github.com/js-cookie/js-cookie)
*/

//globally declare the following so they're accessable in the HTML
var refSource;
var searchSource;
var socialSource;

//$(function getKapostQueryString(){

jQuery(function getKapostQueryString($) {
/* PART 1: Check if URL contains oktosource */

  //Convert query string value to picklist value
  var oktoStringMapping = {
    facebook: "Facebook",
    google: "Google+",
    linkedin: "LinkedIn",
    twitter: "Twitter"
  }

  var oktoStringValue = $.url('?oktosource'); //find the value of the query string and store it in oktoStringValue
  //var qsSocialSource = oktoStringMapping[oktoStringValue] || null;
  socialSource = oktoStringMapping[oktoStringValue] || null;

/*PART 2: Get the value of rs and convert it to the pick list value
Note: When adding a new EMAIL rs=, also add the value to Part 5, or the search engine will win over rs=
Note: The blog will overwrite social media rs=, so use oktosource= instead of rs= for social links (oktosource is already configured in Oktopost)
*/

  //Convert query string value to picklist value
  var rsQueryStringMapping = {
    adr: "AdRoll",
    blog: "Blog",
    bad: "BingAds",
    consyn: "Content Syndication",
    cusmkt: "Customer Marketing",
    css: "Customer Success Email",
    //fb: "Facebook",
    fbad: "Facebook Paid",
    gadword: "Google AdWords",
    //gp: "Google+",
    insta: "Instagram",
    //link: "LinkedIn",
    linkad: "LinkedIn Paid",
    nl: "Newsletter",
    nu: "Nurture Email",
    ob: "Outbrain",
    pin: "Pinterest",
    promo: "Promotional Email",
    pr: "Public Relations",
    re: "Re-engagement Email",
    sa: "Sales Email",
    sshare: "Slideshare",
    surv: "Survey",
    term: "Terminus",
    //tw: "Twitter",
    twad: "Twitter Paid",
    vid: "Vidyard",
    yt: "Youtube"
  }

  var rsQueryStringValue = $.url('?rs'); //find the value of the query string and store it in rsQueryStringValue
  var rsRefSource = rsQueryStringMapping[rsQueryStringValue] || null;



/* PART 3: Look at document.referrer for domainRefSource */
  var domainValue = null;

  var documentReferralMapping = [
    { documentReferralStringValue: "email.kapost", domainValue: "Promotional Email" },
    { documentReferralStringValue: "framework.kapost", domainValue: "Microsite" },
    { documentReferralStringValue: "marketeer.kapost", domainValue: "Blog" },
    { documentReferralStringValue: "plus.google", domainValue: "Google+" },
    //subdomains need to be checked first
    { documentReferralStringValue: "bing", domainValue: "Bing" },
    { documentReferralStringValue: "facebook", domainValue: "Facebook" },
    { documentReferralStringValue: "google", domainValue: "Google" },
    { documentReferralStringValue: "instagram", domainValue: "Instagram" },
    { documentReferralStringValue: "kapost", domainValue: "Website" },
    { documentReferralStringValue: "linkedin", domainValue: "LinkedIn" },
    { documentReferralStringValue: "pinterest", domainValue: "Pinterest" },
    { documentReferralStringValue: "twitter", domainValue: "Twitter" },
    { documentReferralStringValue: "yahoo", domainValue: "Yahoo" },
    { documentReferralStringValue: "youtube", domainValue: "Youtube" }
  ]

  var domainRefSource = null;

  for (var i = 0; i < documentReferralMapping.length; i += 1) {
    var uri = document.referrer;


    if (uri.indexOf(documentReferralMapping[i].documentReferralStringValue) !== -1) {
      domainRefSource = documentReferralMapping[i].domainValue;
      break;
    }
  }


/* PART 4: Grab the Search Engine (from domainRefSource) and store it in searchSource */
  //If rsQueryStringValue is not any of the email query strings values (in arrays, -1 is false, >= 0 is true), and domainRefSource is Google, Bing or Yahoo, store in searchSource
  if ($.inArray(rsQueryStringValue, ['css', 'nl', 'nu', 're', 'sa', 'surv']) == -1 ) {
      if (domainRefSource == "Google") {searchSource = 'Google';}
      else if (domainRefSource == "Bing") {searchSource = 'Bing';}
      else if (domainRefSource == "Yahoo") {searchSource = 'Yahoo';}
  } else {
    searchSource = null;
  }


/* PART 5: Grab the Social Network (from domainRefSource) and store it in socialSource */
  //If rsQueryStringValue is not any of the email query strings values (in arrays, -1 is false, >= 0 is true), and domainRefSource is a Social Network, store in socialSource
  if ($.inArray(rsQueryStringValue, ['css', 'nl', 'nu', 're', 'sa', 'surv']) == -1 ) {
      if (domainRefSource == "Facebook") {socialSource = 'Facebook';}
      else if (domainRefSource == "Google+") {socialSource = 'Google+';}
      else if (domainRefSource == "LinkedIn") {socialSource = 'LinkedIn';}
      else if (domainRefSource == "Twitter") {socialSource = 'Twitter';}
  }

/* PART 6: Assign the direct referral source, in refSource, with a picklist value. rs= always wins for direct */
  if (rsRefSource != null) {
    refSource = rsRefSource;
  } else if (socialSource != null) {
    refSource = socialSource;
  } else if (domainRefSource != null) {
    refSource = domainRefSource;
  } else {
    refSource = null;
  }

});
