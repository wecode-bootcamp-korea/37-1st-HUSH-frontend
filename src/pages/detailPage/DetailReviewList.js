import React, { useState, useEffect } from 'react';
import './DetailReviewList.scss';

function DetailReviewList({ listContent }) {
  const [userEmail, setUserEmail] = useState('rkdfnql22@naver.com');

  useEffect(() => {
    const id = userEmail.split('@')[0];
    const mail = userEmail.split('@')[1];

    const maskingId = id => {
      let splitId = id.substring(0, 1);

      for (let i = 1; i < id.length; i++) {
        splitId += '*';
      }
      return splitId;
    };

    const maskingMail = mail => {
      let splitMail = '';

      for (let i = 1; i < mail.length; i++) {
        splitMail += '*';
      }
      splitMail += mail.substring(mail.length - 1, mail.length);
      return splitMail;
    };

    setUserEmail(maskingId(id) + '@' + maskingMail(mail));
  }, [userEmail]);

  const date = new Date();
  const year = date.getFullYear();
  const month = '0' + (date.getMonth() + 1);
  const day = ('0' + date.getDate()).slice(-2);
  const dateStr = year + '-' + month + '-' + day;

  // const orderedDate = dateStr.sort(
  //   (a, b) => new Date(a.dateStr) - new Date(b.dateStr)
  // );

  // console.log('orderedDate:', orderedDate);

  return (
    <div>
      {listContent.map((item, key) => {
        return (
          <li key={key}>
            <div className="box">
              <div className="review-top">
                <div className="writer">{userEmail}</div>
                <div className="date">{dateStr}</div>
              </div>
              <div className="review-content">{item}</div>
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default DetailReviewList;
