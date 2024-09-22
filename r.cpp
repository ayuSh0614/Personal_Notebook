#include<bits/stdc++.h>
using namespace std;

int main()
{
    int n, k;
    cin>>n>>k;
    vector<int> v(n);
    for (int i = 0; i < n; i++)
    {
        cin>>v[i];
    }

    vector<int> ans;
    int count = 0;
    int sums = 0;

    for (int i = 0; i < n; i++)
    {
        sums+=v[i];
        count++;
        if(count == k)
        {
            ans.push_back(sums);
            sums = 0;
            count = 0;
        }
    }

    for(auto i : ans)
    {
        cout<<i<<endl;
    }
    
    
}

