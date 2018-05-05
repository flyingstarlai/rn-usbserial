package dev.starlai.uartandroid;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;

import com.google.android.things.pio.PeripheralManager;

import java.util.List;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        PeripheralManager manager = PeripheralManager.getInstance();
        List<String> deviceList = manager.getUartDeviceList();
        if (deviceList.isEmpty()) {
            Log.i("MYUART", "No UART port available on this device.");
        } else {
            Log.i("MYUART", "List of available devices: " + deviceList);
        }
    }
}
