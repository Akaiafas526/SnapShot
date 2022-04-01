module.exports = {
  format_date: (date) => {
    console.log(date,'DATE   ASDASD ASDADS')
    let hour = date.getHours()+1;
    // let timeOfDay;
    // if(hour>12){
    //   hour-=12
    //   timeOfDay = 'PM'
    // } else {
    //   timeOfDay = 'AM'
    // }
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  },
};
