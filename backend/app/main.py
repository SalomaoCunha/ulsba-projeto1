import os

import psycopg
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Plataforma Cuidados Paliativos ULSBA")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

DATABASE_URL = os.environ["DATABASE_URL"]


@app.get("/health")
def health():
    """Confirma que a API fala com a BD e que o PostGIS está ativo."""
    with psycopg.connect(DATABASE_URL) as conn:
        postgis = conn.execute("SELECT PostGIS_Version()").fetchone()[0]
    return {"status": "ok", "postgis": postgis}