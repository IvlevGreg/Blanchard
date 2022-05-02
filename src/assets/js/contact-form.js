var selector = document.getElementById("tel");

var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

const validation = new JustValidate('.form');



validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Введите больше 3 букв'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Введите меньше 30 букв'

    },
    {
      rule: 'required',
      errorMessage: 'Укажите имя',
    },
  ])
  validation.addField('#tel', [
    {
      errorMessage: 'Введите корректный телефон',
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()
        console.log(phone)
        return Number(phone) && phone.length === 10
      
    },
  },
  ]);



// var selector = document.querySelector('#tel');
//   validation.addField('#tel', [
//     {
//       function (name, value) => {
//       const phone = selector.inputmask.unmaskedvalue()
//       return Number(phone) && phone.length  === 10
//     }
//   },
//   ]);
    
