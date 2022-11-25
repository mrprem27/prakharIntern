import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import FixtureCard from '../components/FixtureCard';
import './style.css'
import searchIcon from '../assets/searchIcon.png'

export default function FirstScreen() {
    const fetchedFixtures = useRef([]);
    const [fixtures, setFixtures] = useState([]);
    const [filterSearchValue, setFilterSearchValue] = useState('')


    const filterFucnc = () => {
        setFilterSearchValue((sv) => {
            if (!sv)
                setFixtures(fetchedFixtures.current);
            else
                setFixtures(fetchedFixtures.current.filter((f) => f.tournament[0]?.name?.search(sv) + 1 || f.team1[0]?.name?.search(sv) + 1 || f.team2[0]?.name?.search(sv) + 1))
            return sv;
        })
    }

    const fetchData = async (pageNo) => {
        try {
            const { data } = await axios.get('https://matchday.ai/referee/champ/fixture/dummy-matches?page=' + pageNo);
            fetchedFixtures.current = [...fetchedFixtures.current, ...data?.fixtures]
            filterFucnc();
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        const startFetch = async () => {
            let pageNo = 0;
            let loading = false;
            await fetchData(pageNo);
            let l = window.addEventListener('scroll', async () => {
                let dE = document.querySelector('.first-screen-fixtures');
                if (pageNo > 9)
                    return;
                if (window.scrollY + window.innerHeight >= dE.scrollHeight) {
                    console.log(loading, pageNo);
                    if (!loading) {
                        loading = true
                        pageNo++;
                        await fetchData(pageNo);
                        loading = false;
                    }
                }
            })
        }
        startFetch()
        return () => {
        }
    }, []);

    useEffect(() => {
        filterFucnc();
    }, [filterSearchValue])


    return (
        <>
            <section className='first-screen-container'>
                <div>
                    <h2>International Matches</h2>
                </div>
                <div className='first-screen-field-cover'>
                    <div className='first-screen-input-field'>
                        <img src={searchIcon} />
                        <input onChange={(e) => setFilterSearchValue(e.target.value)} type="text" placeholder='Search for Matches' />
                    </div>
                </div>
            </section>
            <section className='first-screen-fixtures'>
                {fixtures?.map((fixture, i) =>
                    <Link to={'fixture/' + i} key={i} className={"fixture-card-link"}> <FixtureCard fixture={fixture} className={"fixture-card-cover"} /></Link>
                )}
            </section>
        </>
    )
}
