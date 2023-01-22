
import { Outlet , Link, useLoaderData, Form,useSubmit, } from "react-router-dom";
import { getAnimals, createAnimal } from "../app/animals_fake"; // fichier animal
import { useState,useEffect} from "react";
import schemaService from "../app/service/schema.service";

export async function loader({request}) {

    const url = new URL(request.url);
    const q = url.searchParams.get("q"); // prend le mot dans la barre de recherche
    const animals = await getAnimals(q); //recherche tout les animaux
    return { animals , q };

}

export async function action() {
    await createAnimal();
}

export default function ListAnimal() {
    const { animals , q } = useLoaderData();
    useEffect(() => {
        document.getElementById("q").value = q;
        //animals.getElementsByName("q").value = q;
    }, [q]);
    const submit = useSubmit();
    return (
        <>
            <div id="sidebar">
                <h1>Liste des Animaux :</h1>
                <nav>
                    {animals.length ? (
                        <ul>
                            {animals.map((animal) => (
                                <li key={animal.id}>
                                    <Link to={`animals/${animal.id}`}>
                                        {animal.name ? (
                                            <>
                                                {animal.name}
                                            </>
                                        ) : (
                                            <i>No Name</i>
                                        )}{" "}
                                        {animal.favorite && <span>★</span>}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No Animals</i>
                        </p>
                    )}
                </nav>
                <div>
                    <Form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search animals"
                            placeholder="Search"
                            type="search"
                            name="q"
                            defaultValue={q}
                            onChange={(event) => {
                                const isFirstSearch = q == null;
                                submit(event.currentTarget.form,{
                                    replace: !isFirstSearch,
                                });
                            }}
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </Form>
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                </div>



            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}
