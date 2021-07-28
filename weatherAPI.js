

/*
const fetchWeather = async() => {
    try{
        const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Rovinj&units=metric&appid=${apiKey}');
        const data = await res.json();
        console.log(data);
    } catch(err){
        console.log("Oh no error!", error);
    }
}
*/

// *** Prikaz temperature pomoću .createElement 
/*const button = document.querySelector('.btn');
  button.addEventListener('click', async (e) => {
      try{
          e.preventDefault();
          const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Split&units=metric&appid=${apiKey}');
          const data = await res.json();
            
          console.log(`Temperatura je : ${data.main.temp}`);
          let prikazTemp = document.createElement('div');
          prikazTemp.classList = 'prikaz';
          prikazTemp.innerHTML = `Temperatura zraka u mjestu ${data.name} iznosi: ${data.main.temp}°C!`;
          document.body.appendChild(prikazTemp);
        } catch(err){
            console.log("Oh no!!", err);  
        }
        
  });
*/

// *** Prikaz temperature pomoću querySelectora i innerHTMLa
const button = document.querySelector('.btnPula');
button.addEventListener('click', async (e) => {
  try{
      e.preventDefault();
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Pula&units=metric&appid=${apiKey}`);
      const data = await res.json();
            
      console.log(`Temperatura je : ${data.main.temp}`);
      const prikazTemp = document.querySelector('.prikaz');
      const temp = `Temperatura zraka u mjestu ${data.name} iznosi: ${data.main.temp}°C!`;
      prikazTemp.innerHTML = temp;
      } catch(err){
        console.log("Oh no!!", err);  
    }   
  });
 
  const buttonZg = document.querySelector('.btnZagreb');
  buttonZg.addEventListener('click', async (e) => {
    try{
        e.preventDefault();
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Zagreb&units=metric&appid=${apiKey}`);
        const data = await res.json();
              
        console.log(`Temperatura je : ${data.main.temp}`);
        const prikazTemp = document.querySelector('.prikaz1');
        const temp = `Temperatura zraka u mjestu ${data.name} iznosi: ${data.main.temp}°C!`;
        prikazTemp.innerHTML = temp;
        } catch(err){
          console.log("Oh no!!", err);  
      }   
    });





