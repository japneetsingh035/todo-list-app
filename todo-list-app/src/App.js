import React, { useState, useEffect } from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';

// Initialize i18next configuration
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import frTranslation from './locales/fr/translation.json';

// Configure i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

function App() {
  const { t, i18n } = useTranslation();
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const addTask = () => {
    if (task) {
      const newTasks = [...tasks, { text: task, completed: false }];
      setTasks(newTasks);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      setTask('');
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container">
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <div className="button-container">
        <button onClick={() => handleLanguageChange('en')}>English</button>
        <button onClick={() => handleLanguageChange('fr')}>Français</button>
      </div>
      
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder={t('placeholder')}
      />
      <button onClick={addTask}>{t('add')}</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            {task.text}
            <button onClick={() => toggleTask(index)}>{t('toggle')}</button>
            <button className="delete" onClick={() => deleteTask(index)}>{t('delete')}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
