import './App.css';
import Countdown, { zeroPad } from 'react-countdown';
import { useRef, useState } from 'react';

function App() {

  const [currentUser, setCurrentUser] = useState(0);



  const testRef = useRef();

  const users = [
    { id: 1, username: 'USER1', activities: "-", productionTime: '80', warranty: '24', paymentTerms: '30%', lotPrice: 3700000, lotPrice2: -25000, userTurn: true },
    { id: 2, username: 'USER2', activities: "-", productionTime: '90', warranty: '24', paymentTerms: '100%', lotPrice: 3200000, lotPrice2: -25000, userTurn: false },
    { id: 3, username: 'USER3', activities: "-", productionTime: '75', warranty: '22', paymentTerms: '60%', lotPrice: 2800000, lotPrice2: -25000, userTurn: false },
    { id: 4, username: 'USER4', activities: "-", productionTime: '120', warranty: '36', paymentTerms: '50%', lotPrice: 2500000, lotPrice2: -25000, userTurn: false },
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
      <h1>Ход торгов Тестовые торги на аппарат ЛОТОС №2033564 (09.11.2020 07:00)</h1>
      <p>Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанных в таблице:</p>

      <table className='aucTable'>
        <tbody>
          <tr>
            <td> Ход </td>
            {
              users.map((user, index) =>
                index == currentUser
                  ?
                  <td ref={testRef}>
                    <Countdown date={Date.now() + 5000}
                      renderer={renderer}
                    />
                  </td>
                  :
                  <td>{null}</td>

              )
            }
          </tr>

          <tr>
            <td> Параметры и требования </td>
            {
              users.map((user, index) =>
                <td> <p>Участник {index + 1}</p> <p>{user.username}</p> </td>
              )
            }
          </tr>


          <tr>
            <td> Наличие комплекса мероприятий, повышающих стандарты качества изготовления </td>
            {
              users.map((user, index) =>
                <td> {user.activities} </td>
              )
            }

          </tr>

          <tr>
            <td> Срок изготовления лота, дней </td>
            {
              users.map((user, index) =>
                <td> {user.productionTime} </td>
              )
            }
          </tr>

          <tr>
            <td> Гарантийные обязательства, мес </td>
            {
              users.map((user, index) =>
                <td> {user.warranty} </td>
              )
            }
          </tr>

          <tr>
            <td> Условия оплаты </td>
            {
              users.map((user, index) =>
                <td> {user.paymentTerms} </td>
              )
            }
          </tr>

          <tr>
            <td> Стоимость изготовления лота, руб (Без НДС) </td>
            {
              users.map((user, index) =>
                <td>
                  <p>{user.lotPrice}</p>
                  <p>{user.lotPrice2}</p>
                  <p>{user.lotPrice - user.lotPrice2}</p>
                </td>
              )
            }
          </tr>
        </tbody>
      </table>

      <p>Действия:</p>
    </div>
  );
}

export default App;
