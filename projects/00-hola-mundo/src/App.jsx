import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return(
        <section className='tw-FollowComponent'>
            <TwitterFollowCard isFollowing={false} userName="erPutex" name="Juan Alberto Lopez"/>
            <TwitterFollowCard isFollowing={false} userName="LMDShow" name="Archienemigo de Illojuan"/>
            <TwitterFollowCard isFollowing={false} userName="Bender" name="Bender Jickson Killian"/>
        </section>
    )
}