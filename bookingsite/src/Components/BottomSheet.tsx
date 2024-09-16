import React, { useState } from 'react';
import styles from './BottomSheet.module.css';
import phoneIcon from '/public/assets/ic_phone.svg';
import whatsappIcon from '/public/assets/ic_whatsapp.svg';
import Image from 'next/image';
import Link from 'next/link';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { firebaseapp } from '../firebase'; // Adjust the path as needed

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumbers: string[];
  children: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose, phoneNumbers }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');

  const openDialog = (number: string) => {
    setSelectedNumber(number);
    setIsDialogOpen(true);
  };

  const closeDialog = () => setIsDialogOpen(false);

  const handleWhatsAppClick = () => {

    logEvent(getAnalytics(firebaseapp), 'click_whatsapp', {
      phone_number: selectedNumber,
    });

    const message = `Hello, I would like to make a reservation on ${date} at ${time} for ${numberOfPeople} people.`;
    const url = `https://wa.me/+2${selectedNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    closeDialog();
  };

  function handlePhoneCallClick(): void {
    logEvent(getAnalytics(firebaseapp), 'click_phone', {
      phone_number: selectedNumber,
    });
  }

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.show : ''}`} onClick={onClose}>
      <div className={styles.bottomSheet} onClick={(e) => e.stopPropagation()}>
        <div className={styles.re}>
          <p className={styles.conus}>Reach Us</p>
        </div>
        {phoneNumbers.map((number, index) => (
          <div className={styles.phoneNumberCard} key={index}>
            <div className={styles.actions}>
              <Link href={`tel:${number}`} passHref onClick={() => handlePhoneCallClick()}>
                <Image src={phoneIcon} alt="Phone Icon" className={styles.phoneIcon} />
              </Link>
              <Link href="#" onClick={() => openDialog(number)} passHref>
                <Image src={whatsappIcon} alt="WhatsApp Icon" className={styles.whatsappIcon} />
              </Link>
            </div>
            <div className={styles.numberAndText}>
              <span className={styles.phoneNumber}>{number}</span>
              <p className={styles.dis}>Click For Call Or Whatsapp Chat</p>
            </div>
          </div>
        ))}

        {isDialogOpen && (
          <div className={styles.dialogOverlay} onClick={closeDialog}>
            <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
              <h3>Send a WhatsApp Message</h3>
              <p className={styles.p}>Choose the day</p>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Select Date"
                className={styles.input}
              />
              <p className={styles.p}>Time</p>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="Select Time"
                className={styles.input}
              />
              <p className={styles.p}>How many people</p>
              <input
                type="number"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
                className={styles.input}
                min="1"
              />
              <div className={styles.buttonContainer}>
                <button onClick={closeDialog} className={styles.closeButton}>
                  Cancel
                </button>
                <button onClick={handleWhatsAppClick} className={styles.whatsappButton}>
                  Send via WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BottomSheet;
