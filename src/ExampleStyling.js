import styles from './ExampleStyling.module.scss';

export default function ExampleStyling() {
  return (
    <div>
      <h1>ExampleStyling</h1>
      <div
        // style prop
        style={{
          margin: '4px',
          padding: '8px',
          border: '4px solid orange',
          borderRadius: '8px',
          fontSize: '24px',
        }}
      >
        Tiger
      </div>

      {/* CSS Modules + SCSS */}
      <div className={styles.alligator}>
        Alligator
        <div>child</div>
      </div>
    </div>
  );
}
