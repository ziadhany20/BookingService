import React from 'react';
import styles from './BottomSheet.module.css';
import './BottomSheet.css';

type BottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  phoneNumbers: string[];
};

const phoneIconUrl = 'path/to/your/photo.png'; // Replace with the actual path to your photo

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose, phoneNumbers }) => {
  return (
    <div className={`${styles.overlay} ${isOpen ? styles.show : ''}`} onClick={onClose}>
      <div className={styles.bottomSheet} onClick={(e) => e.stopPropagation()}>
        <div className={styles.phoneNumbers}>
          <p className="conus">Reach Us</p>
          {phoneNumbers.map((number, index) => (
            <a key={index} href={`tel:${number}`} className={styles.phoneNumber}>
              <img src={phoneIconUrl} alt="Phone icon" className={styles.phoneIcon} />
              <div className={styles.numberAndText}>
                <span>{number}</span>
                <p className={styles.dis}>click to call</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
