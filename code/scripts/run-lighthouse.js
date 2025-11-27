#!/usr/bin/env node
import { writeFile } from 'fs/promises';
import lighthouse from 'lighthouse';
import puppeteer from 'puppeteer';

const url = 'http://localhost:3000';

async function runLighthouse() {
  console.log('Launching Chromium via puppeteer...');
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--remote-debugging-port=9222'],
  });

  try {
    console.log('Running Lighthouse...');
    const options = { port: 9222, output: 'json', logLevel: 'info' };
    const runnerResult = await lighthouse(url, options);
    const reportJson = runnerResult.report;
    await writeFile('./lighthouse-report.json', reportJson);
    console.log('Lighthouse report saved to ./lighthouse-report.json');
  } catch (err) {
    console.error('Lighthouse run failed:', err);
    process.exitCode = 2;
  } finally {
    await browser.close();
  }
}

runLighthouse();
