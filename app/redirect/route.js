import { redirect } from 'next/navigation';

/**
 * QR Code Redirect Route
 * QR code always points to: https://www.thestartershub.in/redirect
 * Change the URL below to update the destination without reprinting the QR.
 */
export async function GET() {
    redirect('https://www.thestartershub.in');
}
