package com.example.android.safetynet;

import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.MenuItem;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import android.widget.Toast;

public class Web extends AppCompatActivity {
    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        webView = (WebView)findViewById(R.id.web_view);
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webView.loadUrl("https://developer.android.com/index.html");
        webView.setWebViewClient(new WebViewClient());

        BottomNavigationView bottomNavigationView = (BottomNavigationView) findViewById(R.id.bottom_nav);

        bottomNavigationView.setOnNavigationItemSelectedListener(
                new BottomNavigationView.OnNavigationItemSelectedListener() {
                    @Override
                    public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                        switch (item.getItemId()) {
                            case R.id.food:
                                // connect with link to food page
                                Toast.makeText(Web.this, "FOOD", Toast.LENGTH_SHORT).show();
                                break;
                            case R.id.shelter:
                                // connect with link to shelter page
                                Toast.makeText(Web.this, "SHELTER", Toast.LENGTH_SHORT).show();
                                break;
                            case R.id.clinics:
                                // connect with link to clinics page
                                Toast.makeText(Web.this, "CLINICS", Toast.LENGTH_SHORT).show();
                                break;
                            case R.id.hygiene:
                                // connect with link to hygiene page
                                Toast.makeText(Web.this, "HYGIENE", Toast.LENGTH_SHORT).show();
                                break;
                        }
                        return true;
                    }
                });

    }

    @Override
    public void onBackPressed() {
        if(webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
