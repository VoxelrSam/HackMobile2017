package com.example.android.safetynet;

import android.support.annotation.NonNull;
import android.support.design.internal.BottomNavigationItemView;
import android.support.design.internal.BottomNavigationMenuView;
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
        webView = (WebView) findViewById(R.id.web_view);
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webView.loadUrl("http://10.73.172.67:8000/home.html");
        webView.setWebViewClient(new WebViewClient());

        BottomNavigationView bottomNavigationView = (BottomNavigationView) findViewById(R.id.bottom_nav);

        bottomNavigationView.setOnNavigationItemSelectedListener(
                new BottomNavigationView.OnNavigationItemSelectedListener() {
                    @Override
                    public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                        switch (item.getItemId()) {
                            case R.id.food:
                                // connect with link to food page
                                webView.loadUrl("http://10.73.172.67:8000/food.html");
                                webView.setWebViewClient(new WebViewClient());
                                break;
                            case R.id.shelter:
                                // connect with link to shelter page
                                webView.loadUrl("http://10.73.172.67:8000/shelter.html");
                                webView.setWebViewClient(new WebViewClient());
                                break;
                            case R.id.clinics:
                                // connect with link to clinics page
                                webView.loadUrl("http://10.73.172.67:8000/clinic.html");
                                webView.setWebViewClient(new WebViewClient());
                                break;
                            case R.id.hygiene:
                                // connect with link to hygiene page
                                webView.loadUrl("http://10.73.172.67:8000/hygiene.html");
                                webView.setWebViewClient(new WebViewClient());
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
