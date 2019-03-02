import React from 'react';
import i18n from 'es2015-i18n-tag';
import { currentLocale, switchLocale } from './i18n';

const App = () => (
  <main>
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{i18n`Welcome to React`}</h1>
          <h2 className="subtitle">{i18n`A simple demo app.`}</h2>
        </div>
      </div>
    </section>

    <section className="section container">
      <LanguageSwitch />
    </section>
  </main>
);

const LanguageSwitch = () => (
  <select
    className="select"
    onChange={e => switchLocale(e.target.value)}
    defaultValue={currentLocale()}
  >
    <option value="de-DE">Deutsch</option>
    <option value="en-US">English</option>
  </select>
);

export default App;
