--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1
-- Dumped by pg_dump version 12.0

-- Started on 2020-03-02 10:36:32 CET

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 7 (class 2615 OID 16427)
-- Name: dmbe; Type: SCHEMA; Schema: -; Owner: dosmasters
--

CREATE SCHEMA dmbe;


ALTER SCHEMA dmbe OWNER TO dosmasters;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 203 (class 1259 OID 16428)
-- Name: posts; Type: TABLE; Schema: dmbe; Owner: dosmasters
--

CREATE TABLE dmbe.posts (
    id_posts integer NOT NULL,
    title text NOT NULL,
    content text NOT NULL
);


ALTER TABLE dmbe.posts OWNER TO dosmasters;

--
-- TOC entry 204 (class 1259 OID 16431)
-- Name: posts_id_posts_seq; Type: SEQUENCE; Schema: dmbe; Owner: dosmasters
--

CREATE SEQUENCE dmbe.posts_id_posts_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dmbe.posts_id_posts_seq OWNER TO dosmasters;

--
-- TOC entry 3195 (class 0 OID 0)
-- Dependencies: 204
-- Name: posts_id_posts_seq; Type: SEQUENCE OWNED BY; Schema: dmbe; Owner: dosmasters
--

ALTER SEQUENCE dmbe.posts_id_posts_seq OWNED BY dmbe.posts.id_posts;


--
-- TOC entry 3061 (class 2604 OID 16433)
-- Name: posts id_posts; Type: DEFAULT; Schema: dmbe; Owner: dosmasters
--

ALTER TABLE ONLY dmbe.posts ALTER COLUMN id_posts SET DEFAULT nextval('dmbe.posts_id_posts_seq'::regclass);


--
-- TOC entry 3063 (class 2606 OID 16441)
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: dmbe; Owner: dosmasters
--

ALTER TABLE ONLY dmbe.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id_posts);


-- Completed on 2020-03-02 10:36:32 CET

--
-- PostgreSQL database dump complete
--

