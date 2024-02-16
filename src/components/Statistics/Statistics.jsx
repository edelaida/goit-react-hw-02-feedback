import s from './Statistics.module.css';

export const Statistics = () => {
  return (
    <section className={s.headSection}>
      <h1>feedback</h1>
      <button>good</button>
      <button>neutral</button>
      <button>bad</button>
    </section>
  );
};
