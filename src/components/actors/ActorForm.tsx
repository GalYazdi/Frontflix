import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { Calendar, Plus, X } from "lucide-react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./ActorForm.module.css";
import { Modal } from "../modal/Modal";
import { useAppDispatch } from "../../app/hooks";
import { closeModal } from "../modal/modalSlice";
import type { Movie } from "debflix-types";
import { useMutation } from "@tanstack/react-query";
import { addActor } from "../../api/actors";
import axios from "axios";

type formFields = {
  firstName: string;
  lastName: string;
  gender: "male" | "female";
  // birthDate: Date;
  actorMovie: Movie[];
  name: string;
};

type Props = {
  movies?: Movie[];
};

export const ActorForm = ({ movies }: Props) => {
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [actorMovies, setActorMovies] = useState<Movie[]>([]);
  const dispatch = useAppDispatch();
  const movieInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<formFields>({});

  const { mutateAsync: addActorMutation } = useMutation({
    mutationFn: addActor,
  });

  const onSubmit: SubmitHandler<formFields> = async (data) => {
    if (!birthDate) {
      alert("Please select a birth date");
      return;
    }
    const parsedBirthDay = birthDate.getTime();

    try {
      const finalData = {
        ...data,
        birthDate : parsedBirthDay,
        movies: actorMovies,
      };

      console.log("dataaa", finalData);

      await addActorMutation(finalData);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log("error:", e.message);
      }
    }
  };

  console.log("Movies data:", movies);

  const handleAddMovie = () => {
    const movieName = movieInputRef.current?.value?.trim().toLowerCase();

    if (!movies?.some((movie) => movie.title.toLowerCase() === movieName)) {
      alert("Movie doesnt exist in the database");
      return;
    }
    setActorMovies((prevMovies) => [
      ...prevMovies,
      movies.find((movie) => movie.title.toLowerCase() === movieName)!,
    ]);
  };

  useEffect(() => {
    console.log("Updated actorMovies:", actorMovies);
  }, [actorMovies]);

  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles.formHeader}>
          <span>New Actor</span>
          <X
            size={20}
            onClick={() => dispatch(closeModal())}
            className={styles.closeForm}
          />
        </div>
        <form className={styles.card} onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>First Name</legend>
            <input
              {...register("firstName")}
              name="firstName"
              placeholder="First Name"
              className={styles.dataInput}
              required
            />
          </fieldset>

          <fieldset>
            <legend>Last Name</legend>
            <input
              {...register("lastName")}
              required
              name="lastName"
              placeholder="Last Name"
              className={styles.dataInput}
            />
          </fieldset>
          <fieldset>
            <legend>Gender</legend>
            <select
              {...register("gender")}
              id="gender"
              required
              defaultValue=""
              className={styles.gender}
            >
              <option value="" disabled hidden>
                Gender Selection
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </fieldset>
          <fieldset>
            <legend>Birth Date</legend>
            <div className={styles.dateContainer}>
              <DatePicker
                // {...register("birthDate")}
                required
                selected={birthDate}
                onChange={(date) => setBirthDate(date)}
                placeholderText="Date Selection"
                dateFormat="dd/MM/yyyy"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                maxDate={new Date()}
              />
              <Calendar color="white" size={22} className={styles.calendar} />
            </div>
          </fieldset>
          <fieldset>
            <legend>Movies</legend>
            <div className={styles.movieContainer}>
              <input
                {...register("actorMovie")}
                name="nameMovie"
                ref={movieInputRef}
                placeholder="Name Movie"
                className={styles.dataInput}
              />
              <Plus
                onClick={handleAddMovie}
                color="white"
                size={30}
                className={styles.plus}
              />
            </div>
          </fieldset>
          <div className={styles.buttonsContanier}>
            <button
              onClick={() => dispatch(closeModal())}
              className={styles.discardButton}
            >
              Discard
            </button>
            <button
              className={`${styles.saveButton} ${
                isSubmitting ? styles.loading : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
