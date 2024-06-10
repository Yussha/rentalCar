import styles from './carlist.module.css'

import { Link } from "react-router-dom";


import { FaCheck } from "react-icons/fa6";
export default function Carlist({ dataCars, setShowCarDetails, setActiveLink }) {
    return (
        <section className={`${styles.customCarPage} pe-5 ps-5 d-flex flex-column align-items-center gap-4`} >
            {dataCars.map(dataCar => (
                <div key={dataCar.id} className={`${styles.contentCon} d-flex flex-column align-items-center justify-content-between p-3 flex-sm-column gap-sm-4 flex-lg-row flex-xl-row flex-xxl-row`}>
                    <div className={styles.imgContainer}>
                        <img className={`${styles.carImg}`} src={dataCar.image} alt="" />
                    </div>

                    <div className='d-flex flex-column align-items-center'>
                        <h1 style={{ color: "#fff" }} className='fs-3'>{dataCar.name}</h1>
                        <ul className={`${styles.specsCon} d-flex flex-column gap-2 flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row`}>
                            <li>
                                <span>{dataCar.passengers} Seats</span>
                            </li>
                            <li>
                                <span>{dataCar.luggage} Luggage</span>
                            </li>
                            <li>
                                {dataCar.airCondition && <span>Air condition: Yes</span>}

                            </li>
                            <li>
                                <span>{dataCar.transmission === "auto" ? "Automatic" : "Manual"}</span>

                            </li>
                        </ul>
                        <Link to="/detailspage">
                            <button
                                className={`${styles.carBtn}`}
                                onClick={() => {
                                    setShowCarDetails(dataCar);
                                    setActiveLink("");
                                }}
                            >
                                Details
                            </button>
                        </Link>

                    </div>

                </div>

            ))}
        </section>
    )
}

