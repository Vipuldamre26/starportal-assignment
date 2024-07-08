import coinImg from '../assets/coin.svg';
import stack from '../assets/stack.png';
import stackImg1 from '../assets/stack-img1.png'
import stackImg2 from '../assets/stack-img2.jpg'
import stackImg3 from '../assets/stack-img3.jpg'
import stackImg4 from '../assets/stack-img4.jpg'
import stackImg5 from '../assets/stack-img5.jpg'
import stackImg6 from '../assets/stack-img6.jpg'

const card1 = [
    {
        heading: "Basics of Crypto",
        disc: "The safest and easiest place to start your crypto journey!",
        quests: "6 Quests",
        xp: "1490 XPs",
        coinImg: coinImg,
        stack: stack,
        arr: [
            {
                id: 1,
                img: stackImg1,
                heading: '#1: But what is crypto and web3?',
                task: '11 Tasks',
            },
            {
                id: 2,
                img: stackImg2,
                heading: '#2: Setting up your own web3 wallet!',
                task: '8 Tasks',
            },
            {
                id: 3,
                img: stackImg3,
                heading: '#3: What the heck is a blockchain?',
                task: '8 Tasks',
            },
            {
                id: 4,
                img: stackImg4,
                heading: "#4: Swapping and bridging? What's that?",
                task: '10 Tasks',
            },
            {
                id: 5,
                img: stackImg5,
                heading: '#5: NFTs and why they’re cool ;)',
                task: '6 Tasks',
            },
            {
                id: 6,
                img: stackImg6,
                heading: '#6: Doing quests and winning rewards!',
                task: '8 Tasks',
            },
        ]
    }
   
]

export default card1;