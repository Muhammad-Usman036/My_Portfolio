#!/bin/bash

echo "========================================"
echo "  Starting MERN Portfolio Project"
echo "========================================"
echo ""

echo "[1/2] Starting Backend Server..."
cd server && npm run dev &
BACKEND_PID=$!

sleep 3

echo "[2/2] Starting Frontend..."
npm run dev &
FRONTEND_PID=$!

echo ""
echo "========================================"
echo "  Both servers are starting!"
echo "  Backend: http://localhost:5000"
echo "  Frontend: http://localhost:8080"
echo "========================================"
echo ""
echo "Press Ctrl+C to stop both servers"

wait


