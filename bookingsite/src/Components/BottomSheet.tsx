import React from 'react';
import styles from './BottomSheet.module.css';
import './BottomSheet.css';
import phoneIcon from '../assets/ic_phone.svg';
import Image from 'next/image';
import Link from 'next/link';


interface BottomSheetProps {

  isOpen: boolean;

  onClose: () => void;

  phoneNumbers: string[];

  children: React.ReactNode;

}

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose, phoneNumbers }) => {
  return (
    <div className={`${styles.overlay} ${isOpen ? styles.show : ''}`} onClick={onClose}>
      <div className={styles.bottomSheet} onClick={(e) => e.stopPropagation()}>
        <div>
          <p className="conus">Reach Us</p>
          {phoneNumbers.map((number, index) => (
            <Link key={index} href={`tel:${number}`} className={styles.phoneNumberCard}>
              {/* <img src={phoneIcon} alt="Phone Icon" className={styles.phoneIcon} /> */}
              <Image src={phoneIcon} alt="Phone Icon" className={styles.phoneIcon} />
              <div className={styles.numberAndText}>
                <span className={styles.phoneNumber}>{number}</span>
                <p className={styles.dis}>click to call</p>
              </div>
            </Link >
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
