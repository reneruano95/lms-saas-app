-- This file is used to seed the database with initial data.
-- It creates a schema for the LMS SaaS application and sets up permissions.
CREATE SCHEMA "lms-saas-app";

GRANT USAGE ON SCHEMA "lms_saas_app" TO anon,
authenticated,
service_role;

GRANT ALL ON ALL TABLES IN SCHEMA "lms_saas_app" TO anon,
authenticated,
service_role;

GRANT ALL ON ALL ROUTINES IN SCHEMA "lms_saas_app" TO anon,
authenticated,
service_role;

GRANT ALL ON ALL SEQUENCES IN SCHEMA "lms_saas_app" TO anon,
authenticated,
service_role;

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA "lms_saas_app" GRANT ALL ON TABLES TO anon,
authenticated,
service_role;

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA "lms_saas_app" GRANT ALL ON ROUTINES TO anon,
authenticated,
service_role;

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA "lms_saas_app" GRANT ALL ON SEQUENCES TO anon,
authenticated,
service_role;

-- Create the tables for the LMS SaaS application
create table
    lms_saas_app.companions (
        id uuid not null default gen_random_uuid (),
        created_at timestamp
        with
            time zone not null default now (),
            name character varying null,
            subject character varying null,
            topic character varying null,
            style character varying null,
            voice character varying null,
            duration bigint null,
            author character varying null,
            constraint companions_pkey primary key (id)
    ) TABLESPACE pg_default;

create table
    lms_saas_app.session_history (
        id uuid not null default gen_random_uuid (),
        created_at timestamp
        with
            time zone not null default now (),
            user_id character varying null,
            companion_id uuid null default gen_random_uuid (),
            constraint session_history_pkey primary key (id),
            constraint session_history_companion_id_fkey foreign KEY (companion_id) references lms_saas_app.companions (id) on update CASCADE on delete CASCADE
    ) TABLESPACE pg_default;

create table
    lms_saas_app.bookmarks (
        id uuid not null default gen_random_uuid (),
        created_at timestamp
        with
            time zone not null default now (),
            user_id character varying not null,
            companion_id uuid not null default gen_random_uuid (),
            constraint bookmarks_pkey primary key (id),
            constraint bookmarks_companion_id_fkey foreign KEY (companion_id) references lms_saas_app.companions (id) on update CASCADE on delete CASCADE
    ) TABLESPACE pg_default;

-- Enable row level security for the tables
alter table lms_saas_app.session_history enable row level security;

alter table lms_saas_app.bookmarks enable row level security;

alter table lms_saas_app.companions enable row level security;

-- Create policies for the session_history table
create policy "All" ON "lms_saas_app"."session_history" for
select
    to anon using (true);

create policy "Clerk" on "lms_saas_app"."session_history" to public using (
    (
        SELECT
            auth.jwt () AS jwt
    ) IS NOT NULL
)
with
    check (
        (
            (
                SELECT
                    auth.jwt () AS jwt
            ) IS NOT NULL
        )
    );

-- Create policies for the companions table
create policy "All" ON "lms_saas_app"."companions" for
select
    to anon using (true);

create policy "Clerk" on "lms_saas_app"."companions" to public using (
    (
        SELECT
            auth.jwt () AS jwt
    ) IS NOT NULL
)
with
    check (
        (
            (
                SELECT
                    auth.jwt () AS jwt
            ) IS NOT NULL
        )
    );

-- Create policies for the bookmarks table
create policy "All" ON "lms_saas_app"."bookmarks" for
select
    to anon using (true);

create policy "Clerk" on "lms_saas_app"."bookmarks" to public using (
    (
        SELECT
            auth.jwt () AS jwt
    ) IS NOT NULL
)
with
    check (
        (
            (
                SELECT
                    auth.jwt () AS jwt
            ) IS NOT NULL
        )
    );