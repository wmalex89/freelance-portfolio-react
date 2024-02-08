const Contacts = () => {
  return (
      <main className="section">
        <div className="container">
          <h1 className="title-1">Contacts</h1>
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>Moscow, Russia</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Telegram / WhatsApp / Viber</h2>
              <p>
                <a href="tel:+79106715935">+7 (910) 671-59-35</a>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p>
                <a href="mailto:wmalex89@mail.ru">wmalex89@mail.ru</a>
              </p>
            </li>
          </ul>
        </div>
      </main>
  );
};
export default Contacts;
