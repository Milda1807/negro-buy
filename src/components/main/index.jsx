import { forwardRef } from 'react';
import styles from './style.module.scss';
import Magnetic from '../magnetic';

const Pica = forwardRef(function index(props, ref) {
  return (
    <div className={styles.main}>
        <Magnetic>
          <div className={styles.kokot}>
            <div ref={ref}>Kokot</div>
          </div>
        </Magnetic>
    </div>
  )}
)

export default Pica