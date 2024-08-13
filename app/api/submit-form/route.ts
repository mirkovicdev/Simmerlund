// app/api/submit-form/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongoose';
import { IFormData, FormData } from '@/lib/models/FormData';

export async function POST(request: NextRequest) {
  try {

    await connectToDatabase();

    const formData: IFormData = await request.json();

    // Create a new form data document
    const newFormData = new FormData(formData);

    // Save to database
    await newFormData.save();

    return NextResponse.json({ message: 'Form data saved successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error saving form data:', error);
    return NextResponse.json({ message: 'Error saving form data', error }, { status: 500 });
  }
}
