# Use the official Python image from the Docker Hub
FROM python:3.10-slim

# Set environment variable to prevent Python from writing pyc files to disk
ENV PYTHONDONTWRITEBYTECODE 1

# Set environment variable to ensure Python output is sent straight to terminal (stdout)
ENV PYTHONUNBUFFERED 1

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
COPY requirements.txt /app/
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the entire Django project into the container
COPY . /app/

# Expose the port 8000 to be accessible from outside the container
EXPOSE 8000

# Command to run the Django development server
CMD ["python", "manage.py", "runserver", "127.0.0.1:8000"]
