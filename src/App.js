import './App.css';
import Countdown, { zeroPad } from 'react-countdown';
import { useState } from 'react';

function App() {

  const [currentUser, setCurrentUser] = useState(0);





  const users = [
    { id: 1, username: 'USER1', activities: "-", productionTime: '80', warranty: '24', paymentTerms: '30%', lotPrice: 3700000, lotPrice2: -25000 },
    { id: 2, username: 'USER2', activities: "-", productionTime: '90', warranty: '24', paymentTerms: '100%', lotPrice: 3200000, lotPrice2: -25000 },
    { id: 3, username: 'USER3', activities: "-", productionTime: '75', warranty: '22', paymentTerms: '60%', lotPrice: 2800000, lotPrice2: -25000 },
    { id: 4, username: 'USER4', activities: "-", productionTime: '120', warranty: '36', paymentTerms: '50%', lotPrice: 2500000, lotPrice2: -25000 },
  ]

  const Completionist = () => {

    users.length == currentUser + 1 ?
      setCurrentUser(0)
      :
      setCurrentUser(currentUser + 1)



    console.log(currentUser);

  };


  const renderer = ({ hours, minutes, seconds, completed, }) => {
    if (completed) {
      // Render a complete state
      return Completionist();
    } else {
      // Render a countdown
      return (
        <span>
          {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      );
    }
  };


  return (
    <div className="App">
      <h1 className='pageTitle'>Ход торгов <b>Тестовые торги на аппарат ЛОТОС №2033564 (09.11.2020 07:00)</b></h1>
      <p className='pageSubtitle'>Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанных в таблице:</p>

      <table className='aucTable'>
        <thead>
          <tr>
            <td className='aucTable__title'> Ход </td>
            {
              users.map((user, index) =>
                index == currentUser
                  ?
                  <td className='aucTable__timer'>
                    <Countdown date={Date.now() + 120000}
                      renderer={renderer}
                    />
                  </td>
                  :
                  <td>{null}</td>

              )
            }
          </tr>

          <tr>
            <td className='aucTable__title aucTable__header'> Параметры и требования </td>
            {
              users.map((user, index) =>
                <td className='aucTable__title aucTable__header'> <p>Участник №{index + 1}</p> <p>{user.username}</p> </td>
              )
            }
          </tr>

        </thead>

        <tbody className='aucTable__body'>
          <tr className='aucTable__cells aucTable__activities'>
            <td> Наличие комплекса мероприятий, повышающих стандарты качества изготовления </td>
            {
              users.map((user, index) =>
                <td> {user.activities} </td>
              )
            }

          </tr>

          <tr className='aucTable__cells'>
            <td> Срок изготовления лота, дней </td>
            {
              users.map((user, index) =>
                <td> {user.productionTime} </td>
              )
            }
          </tr>

          <tr className='aucTable__cells'>
            <td> Гарантийные обязательства, мес </td>
            {
              users.map((user, index) =>
                <td> {user.warranty} </td>
              )
            }
          </tr>

          <tr className='aucTable__cells'>
            <td> Условия оплаты </td>
            {
              users.map((user, index) =>
                <td> {user.paymentTerms} </td>
              )
            }
          </tr>

          <tr className='aucTable__cells'>
            <td> Стоимость изготовления лота, руб (Без НДС) </td>
            {
              users.map((user, index) =>
                <td className='aucTable__price'>
                  <p className='priceReduced'><b>{user.lotPrice} руб.</b></p>
                  <p  className='priceSubtracted'><b>{user.lotPrice2} руб.</b></p>
                  <p  className='priceDifference'><b>{user.lotPrice - user.lotPrice2} руб.</b></p>
                </td>
              )
            }
          </tr>
        </tbody>
      </table>

      <p className='actions'>Действия:</p>
    </div>
  );
}

export default App;
