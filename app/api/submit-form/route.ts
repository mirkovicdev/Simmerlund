// app/api/submit-form/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongoose';
import { IFormData, FormData } from '@/lib/models/FormData';

export async function POST(request: NextRequest) {
  try {
    console.log("Received form submission request.");
    
    await connectToDatabase();
    console.log("Database connected successfully.");
    
    const formData: IFormData = await request.json();
    console.log("Form data received:", formData);
    console.log("Data types of received form data:", {
      username: typeof formData.username,
      anonym: typeof formData.anonym,
      tid: {
        months: typeof formData.tid.months,
        years: typeof formData.tid.years,
      },
      kundeomtale: typeof formData.kundeomtale,
      rating: typeof formData.rating,
    });

    // Validate that the rating field exists
    if (formData.rating === undefined || formData.rating === null) {
      throw new Error("Rating value is missing from the form data.");
    }

    // Create a new form data document
    const newFormData = new FormData({
      ...formData,
      rating: formData.rating,
    });
    console.log("Document after creation but before save:", newFormData);

    // Save to database
    await newFormData.save();
    console.log("Form data saved successfully!");
    console.log(newFormData)

    return NextResponse.json({ message: 'Form data saved successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error saving form data:', error);
    return NextResponse.json({ message: 'Error saving form data', error }, { status: 500 });
  }
}
