import React from 'react';

// Avatars
import ManAvatar1 from "../../../assets/img/avatar.png"
import ManAvatar2 from "../../../assets/img/avatar.png"
import ManAvatar3 from "../../../assets/img/avatar.png"
import ManAvatar4 from "../../../assets/img/avatar.png"
import WomenAvatar1 from "../../../assets/img/avatar.png"
import WomenAvatar2 from "../../../assets/img/avatar.png"
import WomenAvatar5 from "../../../assets/img/avatar.png";
import Image1 from "../../../assets/img/avatar.png"

export const chatLists = [
    {
        id: 1,
        name: 'Townsend Seary',
        avatar: <figure className="avatar avatar-state-success">
            <img src={ManAvatar1} className="rounded-circle" alt="avatar"/>
        </figure>,
        text: <p>What's up, how are you?</p>,
        date: '03:41 PM',
        unread_messages: 3,
        messages: [
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar5} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: 'Hello how are you?',
                date: '01:20 PM',
                type: 'outgoing-message'
            },
            {
                name: 'Townsend Seary',
                avatar: <figure className="avatar avatar-state-success">
                    <img src={ManAvatar1} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: <div>I\'m fine, how are you <span role="img" aria-label="xxx">😃</span></div>,
                date: '01:35 PM'
            },
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar5} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: 'I\'m fine thank you. I expect you to send me some files.',
                date: '05:31 PM',
                type: 'outgoing-message'
            },
            {
                name: 'Townsend Seary',
                avatar: <figure className="avatar">
                    <img src={ManAvatar1} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: 'What files are you talking about? I\'m sorry I can\'t remember right now.',
                date: '10:12 PM'
            },
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar5} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: 'I want those files for you. I want you to send 1 PDF and 1 image file.\n',
                date: '11:56 PM',
                type: 'outgoing-message'
            },
            {
                name: 'Townsend Seary',
                avatar: <figure className="avatar">
                    <img src={ManAvatar1} className="rounded-circle" alt="avatar"/>
                </figure>,
                media: <div className="message-content message-file">
                    <div className="file-icon">
                        <i className="fa fa-file-pdf-o"></i>
                    </div>
                    <div>
                        <div>important_documents.pdf <i className="text-muted small">(50KB)</i></div>
                        <ul className="list-inline">
                            <li className="list-inline-item mb-0"><a href="#/">Download</a></li>
                            <li className="list-inline-item mb-0"><a href="#/">View</a></li>
                        </ul>
                    </div>
                </div>,
                date: '11:59 PM'
            },
            {
                type: 'divider',
                text: 'Today'
            },
            {
                name: 'Townsend Seary',
                avatar: <figure className="avatar">
                    <img src={ManAvatar1} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: 'I\'m about to send the other file now.',
                date: '07:15 AM'
            },
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar5} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: 'Thank you so much. These files are very important to me. I guess you didn\'t make any changes to these files. So I need the original versions of these files. Thank you very much again.',
                date: '07:45 AM',
                type: 'outgoing-message'
            },
            {
                name: 'Townsend Seary',
                avatar: <figure className="avatar">
                    <img src={ManAvatar1} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: <div>I thank you. We are glad to help you. <span role="img" aria-label="xxx">😃</span></div>,
                date: '08:00 AM'
            },
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar5} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: <span role="img" aria-label="xxx">😃 😃 ❤ ❤</span>,
                date: '09:23 AM',
                type: 'outgoing-message'
            },
            {
                name: 'Townsend Seary',
                avatar: <figure className="avatar">
                    <img src={ManAvatar1} className="rounded-circle" alt="avatar"/>
                </figure>,
                media: <figure>
                    <img src={Image1} className="w-25 img-fluid rounded" alt="media"/>
                </figure>,
                date: '10:43 PM'
            },
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar5} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: <div>You are good <span role="img" aria-label="xxx">❤❤</span></div>,
                date: '10:50 AM',
                type: 'outgoing-message'
            },
            {
                type: 'divider',
                text: '1 message unread'
            },
            {
                name: 'Townsend Seary',
                avatar: <figure className="avatar">
                    <img src={ManAvatar1} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: <div>I sent you all the files. Good luck with <span role="img" aria-label="xxx">😃</span></div>,
                date: '11:05 AM'
            },
        ]
    },
    {
        id: 2,
        name: 'Forest Kroch',
        avatar: <figure className="avatar avatar-state-warning">
            <img src={ManAvatar4} className="rounded-circle" alt="avatar"/>
        </figure>,
        text: <p><i className="fa fa-camera mr-1"></i> Photo</p>,
        unread_messages: 1,
        date: '03:41 PM',
        messages: [
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <img src={ManAvatar4} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: 'Hello how are you?',
                date: '01:20 PM',
            },
            {
                name: 'Forest Kroch',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar5} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: <div>I'm fine, how are you <span role="img" aria-label="xxx">😃</span></div>,
                date: '01:35 PM',
                type: 'outgoing-message'
            },
            {
                type: 'divider',
                text: '1 message unread'
            },
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <img src={ManAvatar4} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: 'What are you doing this?',
                date: '01:20 PM',
            }
        ]
    },
    {
        id: 3,
        name: 'Byrom Guittet',
        avatar: <figure className="avatar">
            <img src={ManAvatar3} className="rounded-circle" alt="avatar"/>
        </figure>,
        text: <p>I sent you all the files. Good luck with <span role="img" aria-label="xxx">😃</span></p>,
        date: '03:41 PM',
        messages: [
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <img src={ManAvatar3} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: 'Hello how are you?',
                date: '01:20 PM',
            },
            {
                name: 'Forest Kroch',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar5} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: <div>I'm fine, how are you <span role="img" aria-label="xxx">😃</span></div>,
                date: '01:35 PM',
                type: 'outgoing-message'
            },
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <img src={ManAvatar3} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: 'What are you doing this?',
                date: '01:20 PM',
            }
        ]
    },
    {
        id: 4,
        name: 'Margaretta Worvell',
        avatar: <figure className="avatar">
            <img src={WomenAvatar1} className="rounded-circle" alt="avatar"/>
        </figure>,
        text: <p>I need you today. Can you come with me?</p>,
        date: '03:41 PM',
        messages: [
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar1} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: 'Hello how are you?',
                date: '01:20 PM',
            },
            {
                name: 'Forest Kroch',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar5} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: <div>I'm fine, how are you <span role="img" aria-label="xxx">😃</span></div>,
                date: '01:35 PM',
                type: 'outgoing-message'
            },
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar1} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: 'What are you doing this?',
                date: '01:20 PM',
            }
        ]
    },
    {
        id: 5,
        name: <span role="img" aria-label="xxx">😍 My Family 😍</span>,
        avatar: <figure className="avatar">
            <span className="avatar-title bg-warning rounded-circle">
            <i className="fa fa-users"></i>
        </span>
        </figure>,
        text: <p><strong>Maher Ruslandi: </strong>Hello!!!</p>,
        date: '03:41 PM',
        messages: [
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar1} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: 'Hello how are you?',
                date: '01:20 PM',
            },
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <img src={ManAvatar3} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: 'Hi!',
                date: '01:20 PM',
            },
            {
                name: 'Forest Kroch',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar5} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: <div>I'm fine, how are you <span role="img" aria-label="xxx">😃</span></div>,
                date: '01:35 PM',
                type: 'outgoing-message'
            },
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar2} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: 'What are you doing this?',
                date: '01:20 PM',
            }
        ]
    },
    {
        id: 6,
        name: 'Jennica Kindred',
        avatar: <figure className="avatar">
            <img src={WomenAvatar5} className="rounded-circle" alt="avatar"/>
        </figure>,
        text: <p>
            <i className="fa fa-video-camera mr-1"></i>
            Video
        </p>,
        date: '03:41 PM',
        messages: [
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar5} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: 'Hello how are you?',
                date: '01:20 PM',
            },
            {
                name: 'Forest Kroch',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar5} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: <div>I'm fine, how are you <span role="img" aria-label="xxx">😃</span></div>,
                date: '01:35 PM',
                type: 'outgoing-message'
            },
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar5} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: 'What are you doing this?',
                date: '01:20 PM',
            }
        ]
    },
    {
        id: 7,
        name: 'Marvin Rohan',
        avatar: <figure className="avatar">
            <span className="avatar-title bg-info rounded-circle">M</span>
        </figure>,
        text: <p>Have you prepared the files?</p>,
        date: '03:41 PM',
        messages: [
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <span className="avatar-title bg-info rounded-circle">M</span>
                </figure>,
                text: 'Hello how are you?',
                date: '01:20 PM',
            },
            {
                name: 'Forest Kroch',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar5} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: <div>I'm fine, how are you <span role="img" aria-label="xxx">😃</span></div>,
                date: '01:35 PM',
                type: 'outgoing-message'
            },
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <span className="avatar-title bg-info rounded-circle">M</span>
                </figure>,
                text: 'What are you doing this?',
                date: '01:20 PM',
            }
        ]
    },
    {
        id: 8,
        name: 'Townsend Seary',
        avatar: <figure className="avatar">
            <img src={WomenAvatar2} className="rounded-circle" alt="avatar"/>
        </figure>,
        text: <p>Where are you?</p>,
        date: '03:41 PM',
        messages: [
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar2} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: 'Hello how are you?',
                date: '01:20 PM',
            },
            {
                name: 'Forest Kroch',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar5} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: <div>I'm fine, how are you <span role="img" aria-label="xxx">😃</span></div>,
                date: '01:35 PM',
                type: 'outgoing-message'
            },
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar2} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: 'What are you doing this?',
                date: '01:20 PM',
            }
        ]
    },
    {
        id: 9,
        name: 'Gibb Ivanchin',
        avatar: <figure className="avatar">
            <span className="avatar-title bg-secondary rounded-circle">G</span>
        </figure>,
        text: <p>I want to visit them.</p>,
        date: '03:41 PM',
        messages: [
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <span className="avatar-title bg-secondary rounded-circle">G</span>
                </figure>,
                text: 'Hello how are you?',
                date: '01:20 PM',
            },
            {
                name: 'Forest Kroch',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar5} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: <div>I'm fine, how are you <span role="img" aria-label="xxx">😃</span></div>,
                date: '01:35 PM',
                type: 'outgoing-message'
            },
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <span className="avatar-title bg-secondary rounded-circle">G</span>
                </figure>,
                text: 'What are you doing this?',
                date: '01:20 PM',
            }
        ]
    },
    {
        id: 10,
        name: 'Harald Kowalski',
        avatar: <figure className="avatar">
            <img src={ManAvatar1} className="rounded-circle" alt="avatar"/>
        </figure>,
        text: <p>Reports are ready.</p>,
        date: '03:41 PM',
        messages: [
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <img src={ManAvatar1} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: 'Hello how are you?',
                date: '01:20 PM',
            },
            {
                name: 'Forest Kroch',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar5} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: <div>I'm fine, how are you <span role="img" aria-label="xxx">😃</span></div>,
                date: '01:35 PM',
                type: 'outgoing-message'
            },
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <img src={ManAvatar1} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: 'What are you doing this?',
                date: '01:20 PM',
            }
        ]
    },
    {
        id: 11,
        name: 'Afton McGilvra',
        avatar: <figure className="avatar">
            <span className="avatar-title bg-success rounded-circle">A</span>
        </figure>,
        text: <p>I do not know where is it. Don't ask me, please.</p>,
        date: '03:41 PM',
        messages: [
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <span className="avatar-title bg-success rounded-circle">A</span>
                </figure>,
                text: 'Hello how are you?',
                date: '01:20 PM',
            },
            {
                name: 'Forest Kroch',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar5} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: <div>I'm fine, how are you <span role="img" aria-label="xxx">😃</span></div>,
                date: '01:35 PM',
                type: 'outgoing-message'
            },
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <span className="avatar-title bg-success rounded-circle">A</span>
                </figure>,
                text: 'What are you doing this?',
                date: '01:20 PM',
            }
        ]
    },
    {
        id: 12,
        name: 'Alexandr Donnelly',
        avatar: <figure className="avatar">
            <img src={ManAvatar2} className="rounded-circle" alt="avatar"/>
        </figure>,
        text: <p>Can anyone enter the meeting?</p>,
        date: '03:41 PM',
        messages: [
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <img src={ManAvatar2} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: 'Hello how are you?',
                date: '01:20 PM',
            },
            {
                name: 'Forest Kroch',
                avatar: <figure className="avatar">
                    <img src={WomenAvatar5} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: <div>I'm fine, how are you <span role="img" aria-label="xxx">😃</span></div>,
                date: '01:35 PM',
                type: 'outgoing-message'
            },
            {
                name: 'Mirabelle Tow',
                avatar: <figure className="avatar">
                    <img src={ManAvatar2} className="rounded-circle" alt="avatar"/>
                </figure>,
                text: 'What are you doing this?',
                date: '01:20 PM',
            }
        ]
    },
];
