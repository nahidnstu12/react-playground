//  data is response of above api

// const data = 'window.google.ac.h(["faded",[["faded",0,[433]],["faded alan walker lyrics",0,[433]],["faded remix",0,[433]],["faded 8d",0,[433]],["faded piano",0,[433]],["faded wheel free fire",0],["faded karaoke",0,[433]],["faded ringtone",0,[433]],["faded instrumental",0,[433]],["faded live",0,[433]],["faded piano tutorial",0,[433]],["faded whatsapp status",0,[433]],["faded dhol cover",0,[433]],["faded dance",0,[433]]],{"k":1,"q":"_sPyvXmmbfcsVtfP4sgjOdKQAvg"}])';

const searchSuggestions = [];
data.split('[').forEach((ele, index) => {
  if (!ele.split('"')[1] || index === 1) return;
    return searchSuggestions.push(ele.split('"')[1]);
});
console.log(searchSuggestions);