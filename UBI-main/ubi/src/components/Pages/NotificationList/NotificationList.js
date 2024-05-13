import React, { Fragment, useEffect, useState } from 'react';
import { Breadcrumb, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NotificationServices from '../../../services/NotificationServices';
import Utils from './../../../utils/Utils';
import NotificationPopup from './NotificationPopUp';

const NotificationList = () => {

  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      if (Utils.can('View Announcement')) {
        var notifications = await NotificationServices.get();
        setData(notifications.data);
        console.log(notifications.data);
      }
    }

    fetch()
  }, []);

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Notifications</h2>
          <Breadcrumb>
            <Breadcrumb.Item active > Notification List  </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {Utils.can('Insert Announcement') &&
          <div className="d-flex">
            <div className="justify-content-center">
              <Button
                variant="primary"
                type="button"
                onClick={() => setShowModal(true)}
                className="my-2 btn-icon-text"
              >
                + Add Notification
              </Button>
            </div>
          </div>
        }
        <NotificationPopup showModal={showModal} setShowModal={setShowModal} id={null} />
      </div>

      <div className="container">
        <ul className="notification">

          {data.map((not, index) => (
            <React.Fragment key={index}>

              <li>
                <div className="notification-time">
                  <span className="date">{new Date(not.created_at).toLocaleString('en-US', { month: 'short', day: 'numeric' })}</span>
                  <span className="time">{new Date(not.created_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <div className="notification-icon">
                  <Link to="#"></Link>
                </div>
                <div className="notification-body">
                  <div className="media mt-0">
                    <div className="main-avatar avatar-md online">
                      <img
                        alt="avatar"
                        className="rounded-6"
                        src={require("../../../assets/img/users/1.jpg")}
                      />
                    </div>
                    <div className="media-body ms-3 d-flex">
                      <div className="">
                        <p className="tx-14 text-dark mb-0 tx-semibold">
                          {not.title}
                        </p>
                        <p className="mb-0 tx-13 text-muted">
                          <p className="mb-0 tx-13 text-muted">{not.announcement.replace(/<[^>]+>/g, '')}</p>
                        </p>
                      </div>
                      <div className="notify-time">
                        <p className="mb-0 text-muted tx-11">
                          {(() => {
                            const timeDifference = new Date() - new Date(not.created_at);
                            const seconds = Math.floor(timeDifference / 1000);
                            const minutes = Math.floor(seconds / 60);
                            const hours = Math.floor(minutes / 60);
                            const days = Math.floor(hours / 24);
                            const months = Math.floor(days / 30);
                            const years = Math.floor(months / 12);
                            return years > 0 ? `${years} year${years !== 1 ? 's' : ''} ago` : months > 0 ? `${months} month${months !== 1 ? 's' : ''} ago` : days > 0 ? `${days} day${days !== 1 ? 's' : ''} ago` : hours > 0 ? `${hours} hour${hours !== 1 ? 's' : ''} ago` : minutes > 0 ? `${minutes} minute${minutes !== 1 ? 's' : ''} ago` : `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
                          })()}
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </React.Fragment>
          ))}

        </ul>
        <div className="text-center mb-4">
          <Button className="btn ripple btn-primary w-md" onClick={() => window.location.reload()}>
            Reload
          </Button>
        </div>
      </div>
    </Fragment>
  )
}; NotificationList.propTypes = {};

NotificationList.defaultProps = {};

export default NotificationList;