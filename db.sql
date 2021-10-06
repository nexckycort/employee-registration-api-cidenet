--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Drop databases (except postgres and template1)
--

DROP DATABASE cidenet;




--
-- Drop roles
--

DROP ROLE root;


--
-- Roles
--

CREATE ROLE root;
ALTER ROLE root WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'md5b4b8daf4b8ea9d39568719e1e320076f';






--
-- Databases
--

--
-- Database "template1" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.7
-- Dumped by pg_dump version 12.7

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

UPDATE pg_catalog.pg_database SET datistemplate = false WHERE datname = 'template1';
DROP DATABASE template1;
--
-- Name: template1; Type: DATABASE; Schema: -; Owner: root
--

CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';


ALTER DATABASE template1 OWNER TO root;

\connect template1

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
-- Name: DATABASE template1; Type: COMMENT; Schema: -; Owner: root
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- Name: template1; Type: DATABASE PROPERTIES; Schema: -; Owner: root
--

ALTER DATABASE template1 IS_TEMPLATE = true;


\connect template1

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
-- Name: DATABASE template1; Type: ACL; Schema: -; Owner: root
--

REVOKE CONNECT,TEMPORARY ON DATABASE template1 FROM PUBLIC;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;


--
-- PostgreSQL database dump complete
--

--
-- Database "cidenet" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.7
-- Dumped by pg_dump version 12.7

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
-- Name: cidenet; Type: DATABASE; Schema: -; Owner: root
--

CREATE DATABASE cidenet WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';


ALTER DATABASE cidenet OWNER TO root;

\connect cidenet

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: areas; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.areas (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);


ALTER TABLE public.areas OWNER TO root;

--
-- Name: areas_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.areas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.areas_id_seq OWNER TO root;

--
-- Name: areas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.areas_id_seq OWNED BY public.areas.id;


--
-- Name: countrys; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.countrys (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);


ALTER TABLE public.countrys OWNER TO root;

--
-- Name: countrys_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.countrys_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.countrys_id_seq OWNER TO root;

--
-- Name: countrys_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.countrys_id_seq OWNED BY public.countrys.id;


--
-- Name: employees; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.employees (
    id integer NOT NULL,
    first_surname character varying(20) NOT NULL,
    second_surname character varying(20) NOT NULL,
    first_name character varying(20) NOT NULL,
    second_name character varying(20),
    country integer NOT NULL,
    id_type integer NOT NULL,
    identification_number character varying(20) NOT NULL,
    email character varying(300) NOT NULL,
    entry_date timestamp without time zone DEFAULT now() NOT NULL,
    area integer NOT NULL,
    state character(1) DEFAULT 'A'::bpchar NOT NULL,
    registration_date timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.employees OWNER TO root;

--
-- Name: employees_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.employees_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.employees_id_seq OWNER TO root;

--
-- Name: employees_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.employees_id_seq OWNED BY public.employees.id;


--
-- Name: id_types; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.id_types (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);


ALTER TABLE public.id_types OWNER TO root;

--
-- Name: id_types_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.id_types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.id_types_id_seq OWNER TO root;

--
-- Name: id_types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.id_types_id_seq OWNED BY public.id_types.id;


--
-- Name: persons; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.persons (
    id integer NOT NULL,
    first_surname character varying(20) NOT NULL,
    second_surname character varying(20) NOT NULL,
    first_name character varying(20) NOT NULL,
    others_name character varying(50),
    country_id integer NOT NULL,
    id_type_id integer NOT NULL,
    identification_number integer NOT NULL,
    email character varying(300),
    entry_date date NOT NULL,
    area_id integer NOT NULL,
    state character(1) DEFAULT 'A'::bpchar NOT NULL
);


ALTER TABLE public.persons OWNER TO root;

--
-- Name: persons_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.persons_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.persons_id_seq OWNER TO root;

--
-- Name: persons_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.persons_id_seq OWNED BY public.persons.id;


--
-- Name: roles; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    rol character varying
);


ALTER TABLE public.roles OWNER TO root;

--
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.roles_id_seq OWNER TO root;

--
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    token character varying NOT NULL,
    expired timestamp(0) without time zone
);


ALTER TABLE public.sessions OWNER TO root;

--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sessions_id_seq OWNER TO root;

--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.users (
    id integer NOT NULL,
    person_id integer NOT NULL,
    password character varying NOT NULL,
    role_id integer NOT NULL,
    salt character varying NOT NULL
);


ALTER TABLE public.users OWNER TO root;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO root;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: areas id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.areas ALTER COLUMN id SET DEFAULT nextval('public.areas_id_seq'::regclass);


--
-- Name: countrys id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.countrys ALTER COLUMN id SET DEFAULT nextval('public.countrys_id_seq'::regclass);


--
-- Name: employees id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.employees ALTER COLUMN id SET DEFAULT nextval('public.employees_id_seq'::regclass);


--
-- Name: id_types id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.id_types ALTER COLUMN id SET DEFAULT nextval('public.id_types_id_seq'::regclass);


--
-- Name: persons id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.persons ALTER COLUMN id SET DEFAULT nextval('public.persons_id_seq'::regclass);


--
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: areas; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.areas (id, name) FROM stdin;
3	Operación
4	Infraestructura
5	Compras
2	Financiera
1	Administración
7	Servicios Varios
8	Talento Humano
\.


--
-- Data for Name: countrys; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.countrys (id, name) FROM stdin;
1	Colombia
2	Estados Unidos
\.


--
-- Data for Name: employees; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.employees (id, first_surname, second_surname, first_name, second_name, country, id_type, identification_number, email, entry_date, area, state, registration_date) FROM stdin;
\.


--
-- Data for Name: id_types; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.id_types (id, name) FROM stdin;
1	Cédula de Ciudadanía
\.


--
-- Data for Name: persons; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.persons (id, first_surname, second_surname, first_name, others_name, country_id, id_type_id, identification_number, email, entry_date, area_id, state) FROM stdin;
1	admin	admin	admin		1	1	111111	admin@cidenet.com.co	2021-08-20	1	A
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.roles (id, rol) FROM stdin;
1	admin
\.


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.sessions (id, user_id, token, expired) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.users (id, person_id, password, role_id, salt) FROM stdin;
1	1	aGY5m3CJjsbD3Em9Spi+uw==	1	nFFmekeCA6Cdew==
\.


--
-- Name: areas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.areas_id_seq', 8, true);


--
-- Name: countrys_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.countrys_id_seq', 2, true);


--
-- Name: employees_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.employees_id_seq', 15, true);


--
-- Name: id_types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.id_types_id_seq', 1, true);


--
-- Name: persons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.persons_id_seq', 2, true);


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.roles_id_seq', 1, true);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.sessions_id_seq', 6, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: areas areas_pk; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.areas
    ADD CONSTRAINT areas_pk PRIMARY KEY (id);


--
-- Name: countrys countrys_pk; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.countrys
    ADD CONSTRAINT countrys_pk PRIMARY KEY (id);


--
-- Name: employees employees_pk; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_pk PRIMARY KEY (id);


--
-- Name: employees employees_un; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_un UNIQUE (email);


--
-- Name: id_types id_types_pk; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.id_types
    ADD CONSTRAINT id_types_pk PRIMARY KEY (id);


--
-- Name: persons persons_pk; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.persons
    ADD CONSTRAINT persons_pk PRIMARY KEY (id);


--
-- Name: persons persons_un; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.persons
    ADD CONSTRAINT persons_un UNIQUE (identification_number, email);


--
-- Name: roles roles_pk; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pk PRIMARY KEY (id);


--
-- Name: sessions sessions_pk; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pk PRIMARY KEY (id);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- Name: persons_area_id_idx; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX persons_area_id_idx ON public.persons USING btree (area_id);


--
-- Name: employees employees_area_fk; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_area_fk FOREIGN KEY (area) REFERENCES public.areas(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: employees employees_country_fk; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_country_fk FOREIGN KEY (country) REFERENCES public.countrys(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: employees employees_id_type_fk; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_id_type_fk FOREIGN KEY (id_type) REFERENCES public.id_types(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: persons persons_area_fk; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.persons
    ADD CONSTRAINT persons_area_fk FOREIGN KEY (area_id) REFERENCES public.areas(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: persons persons_country_fk; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.persons
    ADD CONSTRAINT persons_country_fk FOREIGN KEY (country_id) REFERENCES public.countrys(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: persons persons_id_types_fk; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.persons
    ADD CONSTRAINT persons_id_types_fk FOREIGN KEY (id_type_id) REFERENCES public.id_types(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: sessions sessions_user_fk; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_user_fk FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: users users_person_fk; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_person_fk FOREIGN KEY (person_id) REFERENCES public.persons(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: users users_role_fk; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_role_fk FOREIGN KEY (role_id) REFERENCES public.roles(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.7
-- Dumped by pg_dump version 12.7

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

DROP DATABASE postgres;
--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: root
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO root;

\connect postgres

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
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: root
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

