import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../util/AppContext";
import { Link } from "react-router-dom";
import Button from "../widgets/Button";
import Navbar from "../widgets/Navbar";
import { BsArrowRight } from "react-icons/bs";
import colors from "../../../assets/colors";
import Activity from "../widgets/Activity";
import Banner from "../widgets/Banner";
import Footer from "../widgets/Footer";
import { FcLandscape } from "react-icons/fc";
import { MdOutlineSportsFootball } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiBookshelf } from "react-icons/gi";
import { FaChess } from "react-icons/fa";
import { FaGuitar } from "react-icons/fa";
import { GiDramaMasks } from "react-icons/gi";
import { BiMoviePlay } from "react-icons/bi";
import { RiParentFill } from "react-icons/ri";
import { format } from "date-fns";

const Home = () => {
    const { setLoaderHidden } = useContext(AppContext);
    const [actsFuture, setActsFuture] = useState([]);
    const [actsPast, setActsPast] = useState([]);

    useEffect(() => {
        getActivitiesFuture();
        getActivitiesPast();
    }, []);

    function getActivitiesFuture() {
        axios
            .get(
                `api/threeactivitiesfuture/${format(
                    new Date(),
                    "yyyy-MM-dd HH:mm:ss"
                )}`
            )
            .then((resp) => {
                setActsFuture(resp.data.data.slice());
            })
            .catch((err) => {});
    }

    function getActivitiesPast() {
        axios
            .get(
                `api/threeactivitiespast/${format(
                    new Date(),
                    "yyyy-MM-dd HH:mm:ss"
                )}`
            )
            .then((resp) => {
                setActsPast(resp.data.data.slice());
            })
            .catch((err) => {});
    }

    return (
        <div className="w-full flex flex-col">
            <div className="h-screen w-full bg-[url('../assets/img/bg.jpg')] bg-cover">
                <Navbar />
                <div className="h-full flex flex-col justify-center p-10 gap-10 text-white bg-opacity-50 bg-gray-800 pb-48">
                    <div className="uppercase font-heading underline underline-offset-8">
                        Be firm, be verile, be a man!
                    </div>
                    <div className="font-heading text-7xl">SUDEK BOYS CLUB</div>
                    <div className="w-52">
                        <Button
                            label="Learn More"
                            icon={
                                <BsArrowRight color={colors.white} size={16} />
                            }
                            onClick={scrollIn}
                        />
                    </div>
                </div>
            </div>
            <div className="bg-gray-100" id="more">
                <div className="flex flex-row items-center p-20">
                    <div className="font-heading text-7xl w-2/12 text-center text-orange-400">
                        SBC
                    </div>
                    <div className="w-10/12 text-2xl text-gray-700 p-6 font-light font-heading">
                        Sudek Boys Club (SBC) is a Family Club run by a group of
                        Nairobi parents whose aim is to help their sons grow
                        into young men of character through constructive use of
                        their free time on weekends and school holidays.
                    </div>
                </div>

                <div className="bg-white">
                    <Banner label="Activities," />

                    <div className="grid grid-flow-row grid-cols-3 p-6 gap-3">
                        <div className="flex flex-col p-4 border rounded-sm">
                            <div className="p-2 mb-2">
                                <FcLandscape size={40} color={colors.orange} />
                            </div>
                            <div className="font-heading text-lg text-gray-700 mb-1">
                                Excursions
                            </div>
                            <div className="text-gray-600 text-sm">
                                Climbing hills, trips to sites and institutions
                                around the city.
                            </div>
                        </div>

                        <div className="flex flex-col p-4 border rounded-sm">
                            <div className="p-2 mb-2">
                                <MdOutlineSportsFootball
                                    size={40}
                                    color={colors.orange}
                                />
                            </div>
                            <div className="font-heading text-lg text-gray-700 mb-1">
                                Sports
                            </div>
                            <div className="text-gray-600 text-sm">
                                Football, basketball, karate, etc.
                            </div>
                        </div>

                        <div className="flex flex-col p-4 border rounded-sm">
                            <div className="p-2 mb-2">
                                <HiOutlineLightBulb
                                    size={40}
                                    color={colors.orange}
                                />
                            </div>
                            <div className="font-heading text-lg text-gray-700 mb-1">
                                Character talks
                            </div>
                            <div className="text-gray-600 text-sm">
                                Personality enhancement, Doctrinal, Catechesis,
                                Mentorship
                            </div>
                        </div>

                        <div className="flex flex-col p-4 border rounded-sm">
                            <div className="p-2 mb-2">
                                <GiBookshelf size={40} color={colors.orange} />
                            </div>
                            <div className="font-heading text-lg text-gray-700 mb-1">
                                Study
                            </div>
                            <div className="text-gray-600 text-sm">
                                Organised study sessions to help the boys
                                complete assignments
                            </div>
                        </div>

                        <div className="flex flex-col p-4 border rounded-sm">
                            <div className="p-2 mb-2">
                                <FaChess size={40} color={colors.orange} />
                            </div>
                            <div className="font-heading text-lg text-gray-700 mb-1">
                                Board games and Crafts
                            </div>
                            <div className="text-gray-600 text-sm">
                                Chess, Origami
                            </div>
                        </div>

                        <div className="flex flex-col p-4 border rounded-sm">
                            <div className="p-2 mb-2">
                                <FaGuitar size={40} color={colors.orange} />
                            </div>
                            <div className="font-heading text-lg text-gray-700 mb-1">
                                Music
                            </div>
                            <div className="text-gray-600 text-sm">
                                Playing musical instruments and the art of
                                listening to music.
                            </div>
                        </div>

                        <div className="flex flex-col p-4 border rounded-sm">
                            <div className="p-2 mb-2">
                                <BiMoviePlay size={40} color={colors.orange} />
                            </div>
                            <div className="font-heading text-lg text-gray-700 mb-1">
                                Movies and Documentaries
                            </div>
                            <div className="text-gray-600 text-sm">
                                Curated and tailored to the topic of the day.
                            </div>
                        </div>

                        <div className="flex flex-col p-4 border rounded-sm">
                            <div className="p-2 mb-2">
                                <GiDramaMasks size={40} color={colors.orange} />
                            </div>
                            <div className="font-heading text-lg text-gray-700 mb-1">
                                Drama and Forktales
                            </div>
                            <div className="text-gray-600 text-sm">
                                Developed around particular topics
                            </div>
                        </div>

                        <div className="flex flex-col p-4 border rounded-sm">
                            <div className="p-2 mb-2">
                                <RiParentFill size={40} color={colors.orange} />
                            </div>
                            <div className="font-heading text-lg text-gray-700 mb-1">
                                Activities for Parents
                            </div>
                            <div className="text-gray-600 text-sm">
                                Father-son activities e.g camps, barbecues,
                                soccer. Mother-son e.g Sous Chef
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 flex flex-col">
                    <Banner label="Upcoming," />
                    <div className="mt-4 p-6 grid grid-flow-row grid-cols-3 gap-y-16 gap-x-16">
                        {actsFuture.map((act, index) => (
                            <Activity key={index} data={act} />
                        ))}
                        {actsFuture.length === 0 && (
                            <span className="p-6 text-gray-700">
                                There currently no upcoming activities :(
                            </span>
                        )}
                    </div>
                    <div className="flex flex-row justify-center p-6">
                        <Link
                            className="hover:text-orange-400 text-gray-700 p-2 border rounded border-gray-300"
                            to="/activities"
                        >
                            See more
                        </Link>
                    </div>
                </div>
            </div>

            <div className="h-screen bg-[url('../assets/img/2.jpg')] bg-cover">
                <div className="flex flex-row-reverse h-full items-center flex-grow">
                    <span className="text-xl bg-white text-gray-600  font-light font-heading w-1/2 flex flex-row rounded-l shadow">
                        <div className="p-6 flex flex-col">
                            <span className="">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Similique, ipsum non! Dolorum
                                consectetur sed eius quo enim? Magnam, cumque
                                similique? Ipsa quam asperiores minima maiores
                                rerum, debitis doloribus impedit distinctio.
                            </span>
                            <span className="p-2 text-sm font-sans font-medium italic text-gray-700">
                                - Elly Okinyo
                            </span>
                        </div>
                    </span>
                </div>
            </div>

            <div className="bg-gray-100">
                <div className="flex flex-col">
                    <Banner label="Recently," />
                    <div className="mt-4 p-6 flex-grow grid grid-flow-row grid-cols-3 gap-y-16 gap-x-16">
                        {actsPast.map((act, index) => (
                            <Activity key={index} data={act} />
                        ))}
                        {actsPast.length === 0 && (
                            <span className="p-6 text-gray-700">
                                Nothing to show :(
                            </span>
                        )}
                    </div>
                </div>
                <div className="flex flex-row justify-center p-6">
                    <Link
                        className="hover:text-orange-400 text-gray-700 p-2 border rounded border-gray-300"
                        to="/activities"
                    >
                        See more
                    </Link>
                </div>
            </div>

            {/* Testimonial and Footer */}
            <div className="flex flex-col">
                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
};

function scrollIn() {
    console.log("clcik");
    document.getElementById("more").scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

export default Home;
